import React, { useEffect, useRef } from 'react';
import './PopupShowtime.css';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { Form, Input, Select } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import "aos/dist/aos.css";
import Aos from 'aos';
import { useDispatch } from 'react-redux';
import { addUserAction } from '../../redux/action/AdminAction';

function AddMovie(props) {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            email: '',
            soDt: '',
            maNhom: '',
            maLoaiNguoiDung: '',
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống!'),
            hoTen: Yup.string().required('Tên không được bỏ trống!'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống').min(6, 'Mật khẩu tối thiểu 6 - 32 kí tự!').max(32, 'Mật khẩu tối thiểu 6 - 32 kí tự!'),
            email: Yup.string().email('Email không hợp lệ').required('Email không được bỏ trống'),
            soDt: Yup.string().matches(/^[0-9]+$/, 'Số điện thoại tất cả là số'),
        }),
        onSubmit: (value) => {
            console.log(value)
            const action = addUserAction(value)
            dispatch(action)
        }
    })

    const handleChangeValue = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const { handleChange, touched, errors } = formik;

    const modalRef = useRef()

    const closeModal = e =>{
        if(modalRef.current === e.target){
            props.setTrigger(false)
        }
    }


    return (props.trigger) ? (
        <div className="popupShowtime" ref={modalRef} onClick={closeModal}>
            <div data-aos="zoom-in" className="popupShowtime-inner text-white">
                <CloseCircleOutlined
                    className="close-btn"
                    onClick={() => props.setTrigger(false)}
                    style={{ fontSize: '30px' }} />
                <h2 className="text-center text-white">Thêm User</h2>
                <Form
                    onSubmitCapture={formik.handleSubmit}
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                >
                    <Form.Item label="Tài Khoản">
                        <Input name="taiKhoan" onChange={handleChange} />
                        {touched.taiKhoan && errors.taiKhoan && <p className="ml-2 text text-warning">{formik.errors.taiKhoan}</p>}
                    </Form.Item>
                    <Form.Item label="Mật Khẩu">
                        <Input name="matKhau" onChange={handleChange} />
                        {touched.matKhau && errors.matKhau && <p className="ml-2 text text-warning">{formik.errors.matKhau}</p>}
                    </Form.Item>
                    <Form.Item label="Họ Tên">
                        <Input name="hoTen" onChange={handleChange} />
                        {touched.hoTen && errors.hoTen && <p className="ml-2 text text-warning">{formik.errors.hoTen}</p>}
                    </Form.Item>
                    <Form.Item label="Email">
                        <Input name="email" onChange={handleChange} />
                        {touched.email && errors.email && <p className="ml-2 text text-warning">{formik.errors.email}</p>}
                    </Form.Item>
                    <Form.Item label="Số điện thoại">
                        <Input name="soDt" onChange={handleChange} />
                        {touched.soDt && errors.soDt && <p className="ml-2 text text-warning">{formik.errors.soDt}</p>}
                    </Form.Item>
                    <Form.Item label="Mã Nhóm">
                        <Select placeholder="Chọn Mã Nhóm" onChange={handleChangeValue('maNhom')}>
                            <Select.Option value="GP00">GP00</Select.Option>
                            <Select.Option value="GP01">GP01</Select.Option>
                            <Select.Option value="GP02">GP02</Select.Option>
                            <Select.Option value="GP03">GP03</Select.Option>
                            <Select.Option value="GP04">GP04</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Loại Người dùng">
                        <Select name="maLoaiNguoiDung" placeholder="Chọn Loại Người dùng" onChange={handleChangeValue('maLoaiNguoiDung')}>
                            <Select.Option key={1} value="QuanTri">QuanTri</Select.Option>
                            <Select.Option key={2} value="KhachHang">KhachHang</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item className="text-center">
                        <button type="submit" className="createTime-btn">Thêm User</button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    ) : "";
}

export default AddMovie
