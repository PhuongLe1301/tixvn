import React, { useState , Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { history } from '../../App';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { ACCESSTOKEN, USER_LOGIN } from '../../ultil/setting';

export default function Header() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const { userLogin } = useSelector(state => state.UserReducer)
    const isLogin = () => {
        <img className="imgAccount" src="https:tix.vn/app/assets/img/avatar.png" />
    }

    const renderLogin = () =>{
        if(_.isEmpty(userLogin)){
            return <NavLink className="p" to='/login'>Đăng Nhập</NavLink>
        }
        return <Fragment>
            <NavLink className="p mr-2" style={{color:'#9b9b9b'}} to="/user">{userLogin.hoTen.length > 11 ? userLogin.hoTen.substr(0,11) + '...' : userLogin.hoTen}</NavLink>
            <div className='logout_btn'>
                <a onClick={()=>{
                    localStorage.removeItem(USER_LOGIN);
                    localStorage.removeItem(ACCESSTOKEN);
                    history.push('/');
                    window.location.reload();
                }}>
                    Đăng Xuất</a>
            </div>
        </Fragment>
    }

    return (
        <nav className="navbar">
            <div className="nav-container">
                <NavLink to="/">
                    <img className="nav-logo" src="https:tix.vn/app/assets/img/icons/web-logo.png" style={{ width: 50, height: 50 }} alt="https:tix.vn/app/assets/img/icons/web-logo.png" />
                </NavLink>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <a className="nav-links" href="#recommendMovie" activeClassName="active">Lịch Chiếu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-links" activeClassName="active" href="#cumRap">Cụm rạp</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-links" activeClassName="active" href="#tinTuc">Tin Tức</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-links" activeClassName="active" href="#">Ứng dụng</a>
                    </li>
                </ul>
                <div className="account mb-3 mr-5">
                    <img className="imgAccount" src="https:tix.vn/app/assets/img/avatar.png" />
                    {renderLogin()}

                </div>
                <div className="location text-dark">
                    <img className='mr-1' src="https:tix.vn/app/assets/img/icons/location-header.png" />
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
