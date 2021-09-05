import React, { useState } from 'react'
import './Register.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import 'react-datepicker/dist/react-datepicker.css'
import { dangKyAction } from '../../redux/action/UserAction'
import { NavLink } from 'react-router-dom'
export default function Register(props) {
    const dispatch = useDispatch()
    const { userRegister } = useSelector(state => state.UserReducer);
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            hoTen: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: ''
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống!'),
            hoTen: Yup.string().required('Tên không được bỏ trống!'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống').min(6, 'Mật khẩu tối thiểu 6 - 32 kí tự!').max(32, 'Mật khẩu tối thiểu 6 - 32 kí tự!'),
            email: Yup.string().email('Email không hợp lệ').required('Email không được bỏ trống'),
            soDt: Yup.string().matches(/^[0-9]+$/, 'Số điện thoại tất cả là số'),
        }),
        onSubmit: value => {
            const action = dangKyAction(value)
            dispatch(action);
        }
    })

    const { handleChange, touched, errors } = formik;

    return (
        <div className="registerGlass">
            <form className="container flex-column" onSubmit={formik.handleSubmit}>
                <h3 className="text-center text-white">Đăng ký</h3>
                <div className="d-flex align-items-center input-field my-3 mb-4">
                    <span className="far fa-user p-2" />
                    <input name="taiKhoan" placeholder="UserName" required className="form-control text-white" onChange={handleChange} onBlur={formik.handleBlur} />
                    {touched.taiKhoan && errors.taiKhoan && <p className="ml-2 text text-success">{formik.errors.taiKhoan}</p>}
                </div>
                <div className="d-flex align-items-center input-field my-3 mb-4">
                    <span className="far fa-user p-2" />
                    <input name="hoTen" placeholder="Name" required className="form-control text-white" onChange={handleChange} onBlur={formik.handleBlur} />
                    {touched.hoTen && errors.hoTen && <p className="ml-2 text text-success">{formik.errors.hoTen}</p>}
                </div>
                <div className="d-flex align-items-center input-field my-3 mb-4">
                    <span className="fas fa-lock p-2"></span>
                    <input name="matKhau" placeholder="Password" required className="form-control text-white" onChange={handleChange} onBlur={formik.handleBlur} />
                    {touched.matKhau && errors.matKhau && <p className="ml-2 text text-success">{formik.errors.matKhau}</p>}
                </div>
                <div className="d-flex align-items-center input-field my-3 mb-4">
                    <span className="fa fa-envelope p-2"></span>
                    <input name="email" placeholder="Email" required className="form-control text-white" onChange={handleChange} onBlur={formik.handleBlur} />
                    {touched.email && errors.email && <p className="ml-2 text text-success">{formik.errors.email}</p>}
                </div>
                <div className="d-flex align-items-center input-field my-3 mb-4">
                    <span className="fa fa-phone p-2"></span>
                    <input name="soDt" placeholder="Phone Number" required className="form-control text-white" onChange={handleChange} onBlur={formik.handleBlur} />
                    {touched.soDt && errors.soDt && <p className="ml-2 text text-success">{formik.errors.soDt}</p>}
                </div>
                <div className="d-flex align-items-center form-group my-3 mb-4">
                    <span className="fa fa-users-cog p-2"></span>
                    <select name="maNhom" className="form-control" onChange={handleChange} >
                        <option value="GP01">Group 1</option>
                        <option value="GP02">Group 2</option>
                        <option value="GP03">Group 3</option>
                        <option value="GP04">Group 4</option>
                    </select>
                </div>
                <div className="form-group text-center">
                    <button type="submit" className="btn btn-white text-dark ">Đăng ký</button>
                </div>
                <div className="form-group text-center btn-question">
                    <p>Bạn đã có tài khoản?
                        <NavLink className="pl-2 text-white" to='/login'>Đăng nhập</NavLink>
                    </p>
                </div>
            </form>
        </div>
    )
}
