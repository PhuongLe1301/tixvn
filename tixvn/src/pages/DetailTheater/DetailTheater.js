import React, { useEffect, useState } from 'react';
import "../Detail/Detail.css";
import "../Detail/circle.css";
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import TabMenu from '../Detail/TabMenu';
import { getFilmDetailAction } from '../../redux/action/FilmAction';
import Trailer from '../Trailer/Trailer';
import { Button } from '@tsamantanis/react-glassmorphism'
import moment from 'moment';
import { CustomCard } from '@tsamantanis/react-glassmorphism';
import '@tsamantanis/react-glassmorphism/dist/index.css';
import { Rate } from 'antd';
import TabInFo from '../Detail/TabInFo';
import { getInfoCinemaComplexAction, getListTheaterSystemAction } from '../../redux/action/TheaterAction';
import _ from 'lodash';
import HomeMenu from '../Home/HomeMenu/HomeMenu';

export default function DetailTheater(props) {
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index)
    }
    const { heThongRapChieu } = useSelector(state => state.TheaterReducer);
    const dispatch = useDispatch()
    const { thongTinChiTiet } = useSelector(state => state.FilmReducer)
    // const [buttonPopup, setButtonPopup] = useState(false);
    useEffect(() => {
        // const action = getFilmDetailAction(props.match.params.postId);
        // dispatch(action)

        dispatch(getListTheaterSystemAction());
    }, [])
    return (
        <div style={{
            backgroundImage: 'url(https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952220224.png)',
            minHeight: '10vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <CustomCard
                style={{ paddingTop: 80, minHeight: '100vh' }}
                effectColor="#C780FF"
                color="#fff"
                blur={20}
                borderRadius={0}
            >
                {/* <div className="topDetail d-flex pl-3">
                    <NavLink className="backMenu" to="/">Trang Chủ</NavLink>
                    <h2 className="filmTitle">{arrHeThongRap.lstCumRap?.tenCumRap}</h2>
                </div> */}
                <div className="container pt-3">
                    <div className="row d-flex" style={{ alignItems: 'center' }}>
                        <div className="imgPoster col-3">
                            <img style={{ width: 250, height: 350 }} src='https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952220224.png' alt="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952220224.png" />
                        </div>
                        <div className="col-4 infoFilm d-flex">
                            <ul className="infoFilm" style={{ color: '#333' }}>
                                <li className="text-dark" style={{ fontWeight: 'bold', fontSize: '24px' }}>BHD Star Bitexco</li>
                                <li style={{ fontSize: '14px' }}>L3-Bitexco Icon 68, 2 Hải Triều, Q.1</li>
                                <li className="text-white mt-3"><button style={{ backgroundColor: '#fb4226', padding: '6px 28px', border: 'none', borderRadius: '5px' }}>Mua vé</button></li>
                            </ul>
                        </div>
                        <div className="col-5 rateCircle">
                            <div className={`c100 p${10 * 10} green`}>
                                <span>{10 * 10}%</span>
                                <div className="slice">
                                    <div className="bar"></div>
                                    <div className="fill"></div>
                                </div>
                            </div>
                            <div style={{ position: 'absolute', transform: 'translateY(128px)' }}>
                                <h5><Rate allowHalf value={10 / 2} style={{ color: '#fb4226' }} /></h5>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="titleIF">
                    <h2 className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Lịch Chiếu</h2>
                    <h2 className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Thông tin</h2>
                    <h2 className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>Đánh giá</h2>
                </div>
                <div className={toggleState === 1 ? "detailBottom activeDetail" : "detailBottom"}>
                    <HomeMenu heThongRapChieu={heThongRapChieu} />
                </div>
                <div className="container">
                    <div className={toggleState === 2 ? "detailBottom activeDetail" : "detailBottom"}>
                        <div className="row my-4 mx-5 text-dark" style={{fontSize:'16px'}}>
                            <div className="col-6">
                                <div className="d-flex">
                                    <p style={{width: '35%'}}>Địa Điểm</p>
                                    <p style={{width: '65%'}}>L3-Bitexco Icon 68, 2 Hải Triều, Q.1</p>
                                </div>
                                <div className="d-flex">
                                    <p style={{width: '35%'}}>Điện Thoại</p>
                                    <p style={{width: '65%'}}>028 62 670 670</p>
                                </div>
                                <div className="d-flex">
                                    <p style={{width: '35%'}}>Email</p>
                                    <p style={{width: '65%'}}>info@bhdstar.vn</p>
                                </div>
                                <div className="d-flex">
                                    <p style={{width: '35%'}}>Phòng Chiếu</p>
                                    <p style={{width: '65%'}}>7 2D. 4 3D</p>
                                </div>
                                <div className="d-flex">
                                    <p style={{width: '35%'}}>Giờ mở cửa</p>
                                    <p style={{width: '65%'}}>8:00 - 24:00</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <p>Giới Thiệu</p>
                                <p>BHD Star Bitexco ICON 68 là một trong những cụm rạp được đầu tư quy mô nhất hiện nay tại Việt Nam, với tổng diện tích hơn 2.000 m2, bao gồm 7 phòng chiếu được trang bị theo tiêu chuẩn quốc tế. Âm thanh đạt chuẩn Dolby 7.1 với hệ thống cách âm hiện đại, trong đó có 4 phòng 3D,  cùng hơn 1.000 ghế ngồi được thiết kế theo kiểu dáng đẹp mắt và tiện dụng để mang lại sự thoải mái nhất cho khán giả.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container' style={{ width: '650px' }}>
                    <div className={toggleState === 3 ? "detailBottom activeDetail " : "detailBottom"}>
                        <div className='row bg-white'>
                            <div className='col-12 d-flex justify-content-start position-relative'>
                                <div>
                                    <img className="" src="https:tix.vn/app/assets/img/icons/web-logo.png" style={{ width: 50, height: 50 }} alt="https:tix.vn/app/assets/img/icons/web-logo.png" />
                                </div>
                                <input className='w-100 px-2' type="text" placeholder="Hãy chấm điểm cho rạp nha!" style={{ border: 'none', padding: '0 60px' }} />
                                <div className="position-absolute" style={{ right: '2%', top: '20%' }}>
                                    <img src="https://tix.vn/app/assets/img/icons/listStar.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CustomCard>
        </div>
    )
}
