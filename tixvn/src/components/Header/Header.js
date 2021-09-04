import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { history } from '../../App';
import { useSelector } from 'react-redux';
import _ from 'lodash';

export default function Header() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const { userLogin } = useSelector(state => state.UserReducer)
    const isLogin = () => {
        <img className="imgAccount" src="https:tix.vn/app/assets/img/avatar.png" />
    }
    return (
        <nav className="navbar">
            <div className="nav-container">
                <img className="nav-logo" src="https:tix.vn/app/assets/img/icons/web-logo.png" style={{ width: 50, height: 50 }} alt="https:tix.vn/app/assets/img/icons/web-logo.png" />

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink className="nav-links" to="/" activeClassName="active">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-links" activeClassName="active" href="#theaterList">Danh Sách Phim</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-links" activeClassName="active" href="#">Tin Tức</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-links" activeClassName="active" href="#">Contact Us</a>
                    </li>
                </ul>
                <div className="account">
                    {_.isEmpty(userLogin) ? <NavLink className="p" onClick={() => { history.push('/login') }}>Đăng Nhập</NavLink> : <p className="p">Hello!{userLogin.taiKhoan}</p>}

                </div>
                <div className="location">
                    <img src="https:tix.vn/app/assets/img/icons/location-header.png" />
                    <select className="border">
                        <option>Hồ Chí Minh</option>
                        <option>Hà Nội</option>
                        <option>Đà Nẵng</option>
                        <option>Hải Phòng</option>
                        <option>Biên Hoà</option>
                        <option>Nha Trang</option>
                        <option>Bình Dương</option>
                        <option>Phan Thiết</option>
                        <option>Hạ Long</option>
                    </select>
                </div>
                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </div>
        </nav>

    )
}
