import React, { useEffect, useRef } from 'react';
import './PopupShowtime.css';
import { Form, Button, Select, DatePicker, InputNumber, Input } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import "aos/dist/aos.css";
import Aos from 'aos';
import { useState } from 'react';
import { manageTheaterService } from '../../../components/services/ManageTheaterService';
import { useFormik } from 'formik';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { manageTicketService } from '../../../components/services/ManageTickerService';

function PopupShowtime(props) {

    const {movie} = props;

    const formik = useFormik({
        initialValues:{
            maPhim: movie.maPhim,
            ngayChieuGioChieu: '',
            maRap:'',
            giaVe:''
            },
        onSubmit : async (values) => {
            try{

                const result = await manageTicketService.createShowtime(values);
                alert(result.data.content);
                window.location.reload();

            }catch(errors){
                console.log('errors', errors.response?.data)
            }
        }
    })

    const [state, setState] = useState({
        heThongRapChieu: [],
        cumRapChieu: [],
    })

    // console.log(state.cumRapChieu);

    useEffect(async () => {
        try{
            let result = await manageTheaterService.getInfoTheaterSystem();

            setState({
                ...state,
                heThongRapChieu: result.data.content
            })
        }catch(errors){
            console.log('errors', errors);
        }


        Aos.init({ duration: 2000 });
    }, []);
    const modalRef = useRef()
    const closeModal = e => {
        if (modalRef.current === e.target) {
            props.setTrigger(false)
        }
    }

    const onChangeDate = (values) => {
        formik.setFieldValue('ngayChieuGioChieu', moment(values).format('DD/MM/YYYY hh:mm:ss'));
        // console.log('onChangeDate: ', moment(values).format('DD/MM/YYYY hh:mm:ss'));
    }

    const onOk = (values) => {
        formik.setFieldValue('ngayChieuGioChieu', moment(values).format('DD/MM/YYYY hh:mm:ss'));
        // console.log('onOk: ', moment(values).format('DD/MM/YYYY hh:mm:ss'));
    }

    const onChangeInputNumber = (values) => {
        formik.setFieldValue('giaVe', values);
    }

    const handleChangeHeThongRap = async (value) => {
        try{
            let result = await manageTheaterService.getInfoCinemaComplex(value);

            setState({
                ...state,
                cumRapChieu:result.data.content
            })
        }catch (errors){
            console.log('errors', errors);
        }
    } 

    const handleChangeCumRap = async (value) => {
        formik.setFieldValue('maRap' , value);
    }

    const convertSelectHTR = () => {
        return state.heThongRapChieu?.map((htr, index)=>{
            return {label: htr.tenHeThongRap, value: htr.maHeThongRap}
        })
    }

    return (props.trigger) ? (
        <div className="popupShowtime" ref={modalRef} onClick={closeModal}>
            <div data-aos="zoom-in" className="popupShowtime-inner text-white">
                <CloseCircleOutlined
                    className="close-btn"
                    onClick={() => props.setTrigger(false)}
                    style={{ fontSize: '30px' }} />
                <h2 className="text-center text-white">T???o l???ch chi???u</h2>
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    onSubmitCapture={formik.handleSubmit}
                >
                    <Form.Item label="H??? th???ng r???p">
                        <Select options={convertSelectHTR()} onChange={handleChangeHeThongRap} placeholder="Ch???n h??? th???ng r???p"/>
                    </Form.Item>
                    <Form.Item label="C???m r???p">
                        <Select options={state.cumRapChieu?.map((cumRap, index)=>({label: cumRap.tenCumRap, value: cumRap.maCumRap}))} onChange={handleChangeCumRap} placeholder="Ch???m c???m r???p"/>
                    </Form.Item>
                    <Form.Item label="Ng??y chi???u gi??? chi???u">
                        <DatePicker format='DD/MM/YYYY hh:mm:ss' showTime onChange={onChangeDate} onOk={onOk} />
                    </Form.Item>
                    <Form.Item label="Gi?? v??">
                        <InputNumber onChange={onChangeInputNumber} min={75000} max={150000}/>
                    </Form.Item>
                    <Form.Item className="text-center">
                        <button type='submit' className="createTime-btn">T???o l???ch chi???u</button>
                    </Form.Item>
                </Form>
                {/* {props.children} */}
            </div>
        </div>
    ) : "";
}

export default PopupShowtime
