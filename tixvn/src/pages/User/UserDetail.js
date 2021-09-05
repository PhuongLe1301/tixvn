import React from 'react'
import { Form, Input, Select } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { updateClientAction } from '../../redux/action/UserAction';
import { useDispatch } from 'react-redux';
export default function UserDetail(props) {
    const { thongTinNguoiDung } = props;
    const dispatch = useDispatch()
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: thongTinNguoiDung.taiKhoan,
            matKhau: thongTinNguoiDung.matKhau,
            hoTen: thongTinNguoiDung.hoTen,
            email: thongTinNguoiDung.email,
            soDt: thongTinNguoiDung.soDT,
            maNhom: 'GP00',
            maLoaiNguoiDung: 'KhachHang',
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống!'),
            hoTen: Yup.string().required('Tên không được bỏ trống!'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống').min(6, 'Mật khẩu tối thiểu 6 - 32 kí tự!').max(32, 'Mật khẩu tối thiểu 6 - 32 kí tự!'),
            email: Yup.string().email('Email không hợp lệ').required('Email không được bỏ trống'),
            soDt: Yup.string().matches(/^[0-9]+$/, 'Số điện thoại tất cả là số'),
        }),
        onSubmit: (value) => {
            const action = updateClientAction(value)
            dispatch(action)
            // console.log(value)
        }
    })
    const { handleChange, touched, errors } = formik;
    return (
        <div>
            <Form
                onSubmitCapture={formik.handleSubmit}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
            >
                <Form.Item label="Tài Khoản">
                    <Input disabled={true} name="taiKhoan" onChange={handleChange} value={formik.values.taiKhoan} />
                    {touched.taiKhoan && errors.taiKhoan && <p className="ml-2 text text-warning">{formik.errors.taiKhoan}</p>}
                </Form.Item>
                <Form.Item label="Mật Khẩu">
                    <Input name="matKhau" onChange={handleChange} value={formik.values.matKhau} />
                    {touched.matKhau && errors.matKhau && <p className="ml-2 text text-warning">{formik.errors.matKhau}</p>}
                </Form.Item>
                <Form.Item label="Họ Tên">
                    <Input name="hoTen" onChange={handleChange} value={formik.values.hoTen} />
                    {touched.hoTen && errors.hoTen && <p className="ml-2 text text-warning">{formik.errors.hoTen}</p>}
                </Form.Item>
                <Form.Item label="Email">
                    <Input name="email" onChange={handleChange} value={formik.values.email} />
                    {touched.email && errors.email && <p className="ml-2 text text-warning">{formik.errors.email}</p>}
                </Form.Item>
                <Form.Item label="Số điện thoại">
                    <Input name="soDt" onChange={handleChange} value={formik.values.soDt} />
                </Form.Item>
                <Form.Item className="text-center">
                    <button type="submit" className="btn btn-success">Cập Nhật User</button>
                </Form.Item>
            </Form>
        </div>
    )
}
