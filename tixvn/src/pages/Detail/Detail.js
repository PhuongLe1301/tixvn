import React, { useEffect, useState } from 'react'
import "./Detail.css"
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import TabMenu from './TabMenu';
import { getFilmDetailAction } from '../../redux/action/FilmAction';
import moment from 'moment';
export default function Detail(props) {
    const dispatch = useDispatch()
    const { thongTinChiTiet } = useSelector(state => state.FilmReducer)
    console.log('thongTinPhim', thongTinChiTiet)
    useEffect(() => {
        const action = getFilmDetailAction(props.match.params.postId);
        dispatch(action)
    }, [])
    return (
        <div className="detailB mt-5">
            <div className="container">
                <div className="d-flex">
                    <NavLink className="backMenu" to="/">Trang Chủ</NavLink>
                    <h2 className="filmTitle">{thongTinChiTiet.tenPhim}</h2>
                </div>
                <div className="detailGlass">
                    <div className="row">
                        <div className="col-3">
                            <img className="pt-3" style={{ width: 250, height: 450 }} src={thongTinChiTiet.hinhAnh} />
                        </div>
                        <div className="col-9">
                            <h2 className="filmTitle2">{thongTinChiTiet.tenPhim}</h2>
                            <p>{thongTinChiTiet.moTa}</p>
                            <div className="d-flex">
                                <ul className="infoFilm pl-1 mr-4">
                                    <li>Phân Loại</li>
                                    <li>Đánh giá</li>
                                    <li>Khởi Chiếu</li>
                                    <li>Thời Luọng</li>
                                    <li>Ngôn Ngữ</li>
                                </ul>
                                <ul className="infoFilm">
                                    <li className="text-danger" style={{ fontWeight: 'bold' }}>C18 - Phim dành cho khán giả từ 18 tuổi trở lên</li>
                                    <li>{thongTinChiTiet.danhGia}/10</li>
                                    <li>{moment(thongTinChiTiet.ngayKhoiChieu).format('YYYY/MM/DD')}</li>
                                    <li>129 phút</li>
                                    <li>Phụ đề tiếng Việt</li>
                                </ul>
                            </div>
                            <div className="d-flex">
                                <NavLink className="btn btn-success mr-3" to="/checkout">Mua vé</NavLink>
                                <a href={thongTinChiTiet.trailer} className="btn btn-success">Xem trailer</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detailBottom">
                    <TabMenu heThongRapChieu={thongTinChiTiet.heThongRapChieu} />
                    {/* <div>
                        {navtab.map((nav,index)=>{
                            return <button onClick={()=>{
                                setMyNavtab(nav)
                            }}>{nav}</button>
                        })}
                        <h3>{myNavtab}</h3>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
