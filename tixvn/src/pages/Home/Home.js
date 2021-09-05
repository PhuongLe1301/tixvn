import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { getApiMovieAction } from '../../redux/action/FilmAction';
import { useDispatch, useSelector } from 'react-redux';
import './Home.css';
import News from '../News/News';
import Trailer from '../Trailer/Trailer';
import Movie from '../../components/Movie/Movie';
import MultipleRows from '../../components/ReactSlick/MultipleRowsSlick';
import HomeMenu from './HomeMenu/HomeMenu';
import { getListTheaterSystemAction } from '../../redux/action/TheaterAction';
import DangChieu from './Slick/DangChieu';
import SapChieu from './Slick/SapChieu';
import HomeCarousel from './HomeCarousel/HomeCarousel';

export default function Home(props) {
    const [buttonPopup, setButtonPopup] = useState(false);

    const dispatch = useDispatch()
    const arrFilm = useSelector(state => state.FilmReducer.arrFilm);
    const { heThongRapChieu } = useSelector(state => state.TheaterReducer);
    useEffect(() => {
        const action = getApiMovieAction();
        dispatch(action);

        dispatch(getListTheaterSystemAction());
    }, [])

    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div>
            <HomeCarousel/>
            <div className="container filterMovie d-flex justify-content-between bg-white position-absolute">
                <div className="filterMovie_item dropdown">
                    <button className="btn btnFilter_Movie bg-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Phim
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Trạng Tí Phiêu Lưu Ký</a>
                        <a className="dropdown-item" href="#">Lật Mặt: 48h</a>
                        <a className="dropdown-item" href="#">Bàn Tay Diệt Qủy - Evil Expeller (C16)</a>
                        <a className="dropdown-item" href="#">Kẻ Vô Danh - Nobody - C18</a>
                    </div>
                </div>
                <div className="filterMovie_item dropdown">
                    <button className="btn btnFilter bg-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Rạp
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Vui lòng chọn phim</a>
                    </div>
                </div>
                <div className="filterMovie_item dropdown">
                    <button className="btn btnFilter bg-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Ngày xem
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Vui lòng chọn phim và rạp</a>
                    </div>
                </div>
                <div className="filterMovie_item dropdown">
                    <button className="btn btnFilter bg-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Suất chiếu
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Vui lòng chọn phim, rạp và ngày xem</a>
                    </div>
                </div>
                <div className="btnFilter_Buy">
                    <button className="btn btn_buyTicket text-white" type="button">MUA VÉ NGAY</button>
                </div>
            </div>
            <div id="recommendMovie" className="container recommendMovie">
                <div className="col-12 text-center btn_recommnendMovie">
                    <a className={toggleState === 1 ? "active mr-5" : "inactive mr-5"} onClick={() => toggleTab(1)}>Đang Chiếu</a>
                    <a className={toggleState === 2 ? "active" : "inactive"} onClick={() => toggleTab(2)}>Sắp Chiếu</a>
                </div>
                <div className={toggleState === 1 ? "recommendMovie_item d-block mt-5" : "recommendMovie_item d-none"}>
                    <DangChieu arrFilm={arrFilm} />
                </div>
                <div className={toggleState === 2 ? "recommendMovie_item d-block  mt-5" : "recommendMovie_item d-none"}>
                    <SapChieu arrFilm={arrFilm} />
                </div>
            </div>
            <div id="cumRap" className="container">
                <HomeMenu heThongRapChieu={heThongRapChieu} />
            </div>
            <div id="tinTuc" className="pt-5">
                <News/>
            </div>
        </div>
    )
}
