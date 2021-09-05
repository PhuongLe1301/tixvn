import React, { useEffect, useRef, useState } from 'react';
import '../ShowTime/PopupShowtime.css';
import { Form, Button, Input, DatePicker, Switch, InputNumber } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import "aos/dist/aos.css";
import Aos from 'aos';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import moment from 'moment';
import { updateMovieUploadAction } from '../../../redux/action/FilmAction';

const EditMovie = (props) => {
    const dispatch = useDispatch();
    const { thongTinPhim } = useSelector(state => state.FilmReducer);
    const [imgSrc, setImgSrc] = useState('');

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maPhim: thongTinPhim.maPhim,
            tenPhim: thongTinPhim.tenPhim,
            trailer: thongTinPhim.trailer,
            moTa: thongTinPhim.moTa,
            ngayKhoiChieu: thongTinPhim.ngayKhoiChieu,
            dangChieu: thongTinPhim.dangChieu,
            sapChieu: thongTinPhim.sapChieu,
            hot: thongTinPhim.sapChieu,
            danhGia: thongTinPhim.danhGia,
            hinhAnh: null,
        },
        onSubmit: (values) => {
            let formData = new FormData();
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key])
                } else {
                    if (values.hinhAnh !== null) {
                        formData.append('File', values.hinhAnh, values.hinhAnh.name);
                    }
                }
            }
            dispatch(updateMovieUploadAction(formData));
        }
    })

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const modalRef = useRef()
    const closeModal = e => {
        if (modalRef.current === e.target) {
            props.setTrigger(false)
        }
    }
    const handleChangeDatePicker = (value) => {
        let ngayKhoiChieu = moment(value);
        formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu);
    }

    const handleChangeSwitchInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        }
    }

    const handleChangeFile = async (e) => {
        let file = e.target.files[0];

        if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif') {
            await formik.setFieldValue('hinhAnh', file);

            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setImgSrc(e.target.result);
            }
            
        }
    }

    return (props.trigger) ? (
        <div className="popupShowtime" ref={modalRef} onClick={closeModal}>
            <div data-aos="zoom-in" className="popupShowtime-inner text-white">
                <CloseCircleOutlined
                    className="close-btn"
                    onClick={() => props.setTrigger(false)}
                    style={{ fontSize: '30px' }} />
                <h2 className="text-center text-white">Chỉnh sửa phim</h2>
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    onSubmitCapture={formik.handleSubmit}
                >
                    <Form.Item label="Tên phim">
                        <Input name="tenPhim" onChange={formik.handleChange} value={formik.values.tenPhim}/>
                    </Form.Item>
                    <Form.Item label="Trailer">
                        <Input name="trailer" onChange={formik.handleChange} value={formik.values.trailer}/>
                    </Form.Item>
                    <Form.Item label="Ngày khởi chiếu">
                        <DatePicker format="DD/MM/YYYY" onChange={handleChangeDatePicker} value={moment(formik.values.ngayKhoiChieu)}/>
                    </Form.Item>
                    <Form.Item label="Đang chiếu">
                        <Switch onChange={handleChangeSwitchInputNumber('dangChieu')} checked={formik.values.dangChieu}/>
                    </Form.Item>
                    <Form.Item label="Sắp chiếu">
                        <Switch onChange={handleChangeSwitchInputNumber('sapChieu')} checked={formik.values.sapChieu}/>
                    </Form.Item>
                    <Form.Item label="Hot">
                        <Switch onChange={handleChangeSwitchInputNumber('hot')} checked={formik.values.hot} />
                    </Form.Item>
                    <Form.Item label="Đánh giá">
                        <InputNumber min={1} max={10} onChange={handleChangeSwitchInputNumber('danhGia')} value={formik.values.danhGia}/>
                    </Form.Item>
                    <Form.Item label="Hình ảnh">
                        <input type="file" onChange={handleChangeFile} accept="image/jpg, image/jpeg, image/png, image/gif" />
                        <br />
                        <img style={{ width: '100px', height: '120px' }} src={imgSrc === '' ? thongTinPhim.hinhAnh : imgSrc} alt="..." />
                    </Form.Item>
                    <Form.Item label="Mô tả">
                        <Input.TextArea name="moTa" onChange={formik.handleChange} value={formik.values.moTa}/>
                    </Form.Item>
                    <Form.Item className="text-center">
                        <button type="submit" className="createTime-btn">Cập nhật</button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    ) : "";
}

export default EditMovie
