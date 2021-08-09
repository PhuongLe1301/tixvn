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
export default function Detail(props) {
    const dispatch = useDispatch()
    const { thongTinChiTiet } = useSelector(state => state.FilmReducer)
    console.log('thongTinPhim detail', thongTinChiTiet)
    const [buttonPopup, setButtonPopup] = useState(false);
    useEffect(() => {
        const action = getFilmDetailAction(props.match.params.postId);
        dispatch(action)
    }, [])
    return (
        // <div className="detailB mt-5">
        //     <div className="container">
        //         <div className="d-flex">
        //             <NavLink className="backMenu" to="/">Trang Chủ</NavLink>
        //             <h2 className="filmTitle">{thongTinChiTiet.content?.tenPhim}</h2>
        //         </div>
        //         <div className="detailGlass">
        //             <div className="row">
        //                 <div className="col-3">
        //                     <img className="pt-3" style={{ width: 250, height: 400 }} src={thongTinChiTiet.content?.hinhAnh} />
        //                 </div>
        //                 <div className="col-9">
        //                     <h2 className="filmTitle2">{thongTinChiTiet.content?.tenPhim}</h2>
        //                     <p>{thongTinChiTiet.moTa}</p>
        //                     <div className="d-flex">
        //                         <ul className="infoFilm pl-1 mr-4">
        //                             <li>Phân Loại</li>
        //                             <li>Đánh giá</li>
        //                             <li>Khởi Chiếu</li>
        //                             <li>Thời Luọng</li>
        //                             <li>Ngôn Ngữ</li>
        //                         </ul>
        //                         <ul className="infoFilm">
        //                             <li className="text-danger" style={{ fontWeight: 'bold' }}>C18 - Phim dành cho khán giả từ 18 tuổi trở lên</li>
        //                             <li>{thongTinChiTiet.content?.danhGia}/10</li>
        //                             <li>{moment(thongTinChiTiet.content?.ngayKhoiChieu).format('YYYY/MM/DD')}</li>
        //                             <li>129 phút</li>
        //                             <li>Phụ đề tiếng Việt</li>
        //                         </ul>
        //                     </div>
        //                     <div className="d-flex">
        //                         <NavLink className="btn btn-success mr-3" to="/checkout">Mua vé</NavLink>
        //                         <button onClick={()=>setButtonPopup(true)} className="btn btn-success">Xem trailer</button>
        //                         <Trailer trigger={buttonPopup} setTrigger={setButtonPopup}>
        //                             <div>
        //                                 <iframe width="1110" height="450" src={thongTinChiTiet.content?.trailer} frameBorder="0" allowFullScreen></iframe>
        //                             </div>
        //                         </Trailer>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="detailBottom">
        //             <TabMenu heThongRapChieu={thongTinChiTiet.content?.heThongRapChieu} />
        //         </div>
        //     </div>
        // </div>

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
                <div className="detailBottom">
                    <TabMenu heThongRapChieu={thongTinChiTiet?.heThongRapChieu} />
                </div>
                
            </CustomCard>
        </div>
    )
}
