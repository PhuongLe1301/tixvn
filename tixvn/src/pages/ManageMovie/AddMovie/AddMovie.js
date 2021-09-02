import React, { useEffect, useState } from 'react';
import '../PopupShowtime.css';
import { Form, Button, Input, DatePicker, Switch, InputNumber } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import "aos/dist/aos.css";
import Aos from 'aos';
import { useFormik } from 'formik'; 
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { addMovieUploadImageAction } from '../../../redux/action/FilmAction';
import { GROUPID } from '../../../ultil/setting';

function AddMovie(props) {

    const [imgSrc, setImgSrc] = useState('');
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues:{
            tenPhim: '',
            trailer: '',
            moTa: '',
            ngayKhoiChieu: '',
            dangChieu: false,
            sapChieu: false,
            hot: false,
            danhGia: 0,
            hinhAnh: {},
        },
        onSubmit: (values) => {
            // console.log('values', values);
            let formData = new FormData();
            // values.maNhom = GROUPID;
            for(let key in values){
                if(key !== 'hinhAnh'){
                    formData.append(key, values[key])
                }else{
                    formData.append('File', values.hinhAnh, values.hinhAnh.name);
                }
            }

            dispatch(addMovieUploadImageAction(formData));
        }
    })

    useEffect(()=>{
        Aos.init({duration:2000});
    }, []);

    const handleChangeDatePicker = (value) => {
        let ngayKhoiChieu = moment(value).format('DD/MM/YYYY');
        formik.setFieldValue('ngayKhoiChieu',ngayKhoiChieu);
    }

    const handleChangeSwitchInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        }
    }

    const handleChangeFile = (e) => {
        let file = e.target.files[0];

        if(file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif'){
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                // console.log(e.target.result);
                setImgSrc(e.target.result);
            }
            formik.setFieldValue('hinhAnh', file);
        }
        // console.log('file', file);
    }

    return (props.trigger) ? (
        <div className="popupShowtime">
            <div data-aos="zoom-in" className="popupShowtime-inner text-white">
                <CloseCircleOutlined
                    className="close-btn"
                    onClick={() => props.setTrigger(false)}
                    style={{ fontSize: '30px' }} />
                <h2 className="text-center text-white">Thêm phim</h2>
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    onSubmitCapture = {formik.handleSubmit}
                >
                    <Form.Item label="Tên phim">
                        <Input name="tenPhim" onChange={formik.handleChange}/>
                    </Form.Item>
                    <Form.Item label="Trailer">
                        <Input name="trailer" onChange={formik.handleChange}/>
                    </Form.Item>
                    <Form.Item label="Ngày khởi chiếu">
                        <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker}/>
                    </Form.Item>
                    <Form.Item label="Đang chiếu">
                        <Switch onChange={handleChangeSwitchInputNumber('dangChieu')}/>
                    </Form.Item>
                    <Form.Item label="Sắp chiếu">
                        <Switch onChange={handleChangeSwitchInputNumber('sapChieu')}/>
                    </Form.Item>
                    <Form.Item label="Hot">
                        <Switch onChange={handleChangeSwitchInputNumber('hot')}/>
                    </Form.Item>
                    <Form.Item label="Đánh giá">
                        <InputNumber min={1} max={10} onChange={handleChangeSwitchInputNumber('danhGia')} />
                    </Form.Item>
                    <Form.Item label="Hình ảnh">
                        <input type="file" onChange={handleChangeFile} accept="image/jpg, image/jpeg, image/png, image/gif"/>
                        <br/>
                        <img style={{width:'100px', height:'120px'}} src={imgSrc} alt="..."/>
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="Mô tả">
                        <Input.TextArea name="moTa" onChange={formik.handleChange}/>
                    </Form.Item>
                    <Form.Item className="text-center">
                        <button type="submit" className="createTime-btn">Thêm phim</button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    ) : "";
}

export default AddMovie
