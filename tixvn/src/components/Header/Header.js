import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import {history} from '../../App';

export default function Header() {
    return (
        <div className="navbarHeader">
            <div className="row">
                <div className="col-4">
                    <img src="https:tix.vn/app/assets/img/icons/web-logo.png" style={{ width: 50, height: 50 }} alt="https:tix.vn/app/assets/img/icons/web-logo.png"/>
                </div>
                <div className="col-4">
                    <div className="navbarHeader_content">
                        <NavLink  className="nav-link" to="/">Home</NavLink>
                        <NavLink  className="nav-link" to="#theaterList">Detail</NavLink>
                        <a href="#theaterList">abc</a>
                    </div>
                </div>
                <div className="col-4">
                    <div className="account">
                        <img className="imgAccount" src="https:tix.vn/app/assets/img/avatar.png" />
                        <a className="p" onClick={()=>{
                            history.push('/login')
                        }}>Đăng Nhập</a>
                    </div>
                    <div className="location">
                        <img className="imgLocation" src="https:tix.vn/app/assets/img/icons/location-header.png"/>
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
                </div>
            </div>
        </div>

    )
}
