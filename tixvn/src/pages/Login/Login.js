import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { dangNhapAction } from '../../redux/action/UserAction';
import './Login.css';

export default function Login() {

    const dispatch = useDispatch();

    const {userLogin} = useSelector( state => state.UserReducer);
    console.log('userLogin', userLogin);

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        onSubmit: values => {
            const action = dangNhapAction(values);
            dispatch(action);

            console.log('value', values);
        },
    });

    return (
        <div className="registerBG">
            <div className="circleTop"></div>
            <div className="circleBot"></div>
            <div className="registerGlass">
                <form onSubmit={(formik.handleSubmit)} className="container flex-column">
                    <h3 className="text-center text-white">Đăng nhập</h3>
                    <div className="d-flex align-items-center input-field my-3 mb-4">
                        <span className="far fa-user p-2" />
                        <input name='taiKhoan' onChange={formik.handleChange} type="text" placeholder="Username" required className="form-control text-white" /> 
                    </div>
                    <div className="d-flex align-items-center input-field my-3 mb-4">
                        <span className="fas fa-lock p-2"></span>
                        <input name='matKhau' onChange={formik.handleChange} type="password" placeholder="Password" required className="form-control text-white" /> 
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-white text-dark">Đăng nhập</button>
                    </div>
                    <div className="form-group text-center btn-question">
                        <p>Bạn chưa có tài khoản? 
                            <NavLink className="pl-2 text-white" to='/register'>Đăng ký</NavLink>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
