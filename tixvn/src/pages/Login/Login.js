import React from 'react';

export default function Login() {
    return (
        <div className="registerBG">
            <div className="circleTop"></div>
            <div className="circleBot"></div>
            <div className="registerGlass">
                <form className="container flex-column">
                    <h3 className="text-center">Đăng nhập</h3>
                    <div className="d-flex align-items-center input-field my-3 mb-4">
                        <span className="far fa-user p-2" />
                        <input type="text" placeholder="Name" required className="form-control text-white" /> 
                    </div>
                    <div className="d-flex align-items-center input-field my-3 mb-4">
                        <span class="fas fa-lock p-2"></span>
                        <input type="password" placeholder="Password" required className="form-control text-white" /> 
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-secondary mt-3 ml-5">Đăng nhập</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
