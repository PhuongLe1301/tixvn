import React, { useEffect, useState } from 'react'
import "./Detail.css"
import "./circle.css"
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import TabMenu from './TabMenu';
import { getFilmDetailAction } from '../../redux/action/FilmAction';
import Trailer from '../Trailer/Trailer';
import { Button } from '@tsamantanis/react-glassmorphism'
import moment from 'moment';
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import { Rate } from 'antd';
import TabInFo from './TabInFo';
export default function Detail(props) {
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index)
    }
    const dispatch = useDispatch()
    const { thongTinChiTiet } = useSelector(state => state.FilmReducer)
    console.log("chitiet", thongTinChiTiet)
    const [buttonPopup, setButtonPopup] = useState(false);
    useEffect(() => {
        const action = getFilmDetailAction(props.match.params.postId);
        dispatch(action)
    }, [])
    return (
        <div style={{
            backgroundImage: `url(${thongTinChiTiet?.hinhAnh})`,
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
                <div className="d-flex pl-3">
                    <NavLink className="backMenu" to="/">Trang Chủ</NavLink>
                    <h2 className="filmTitle">{thongTinChiTiet?.tenPhim}</h2>
                </div>
                <div className="container pt-3">
                    <div className="row d-flex" style={{ alignItems: 'center' }}>
                        <div className="col-3 ml-5">
                            <img style={{ width: 250, height: 350 }} src={thongTinChiTiet?.hinhAnh} />
                        </div>
                        <div className="col-4 infoFilm d-flex">
                            <ul className="infoFilm">
                                <li>{moment(thongTinChiTiet?.ngayKhoiChieu).format('YYYY/MM/DD')}</li>
                                <li className="text-danger" style={{ fontWeight: 'bold' }}>C18 - {thongTinChiTiet?.tenPhim}</li>
                                <li>129 phút - 0 IMDb - 2D/Digital</li>
                                <li><Button text="Trailer" onClick={() => setButtonPopup(true)}></Button></li>
                                <Trailer trigger={buttonPopup} setTrigger={setButtonPopup}>
                                    <div>
                                        <iframe width="1110" height="450" src={thongTinChiTiet?.trailer} frameBorder="0" allowFullScreen></iframe>
                                    </div>
                                </Trailer>
                            </ul>
                        </div>
                        <div className="col-4">
                            <h5><Rate allowHalf value={thongTinChiTiet.danhGia / 2} style={{ color: 'green' }} /></h5>
                            <div className={`c100 p${thongTinChiTiet.danhGia * 10} green`}>
                                <span>{thongTinChiTiet?.danhGia * 10}%</span>
                                <div className="slice">
                                    <div className="bar"></div>
                                    <div className="fill"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="titleIF">
                    <h2 className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Lịch Chiếu</h2>
                    <h2 className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Thông tin</h2>
                </div>
                <div className={toggleState === 1 ? "detailBottom activeDetail" : "detailBottom"}>
                    <TabMenu heThongRapChieu={thongTinChiTiet?.heThongRapChieu} />
                </div>
                <div className={toggleState === 2 ? "detailBottom activeDetail" : "detailBottom"}>
                    <TabInFo thongTinChiTiet={thongTinChiTiet} />
                </div>
            </CustomCard>
        </div>
    )
}
