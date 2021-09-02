import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { getApiMovieAction } from '../../redux/action/FilmAction';
import { useDispatch, useSelector } from 'react-redux'
import './Home.css';
import Movie from '../../components/Movie/Movie';
import MultipleRows from '../../components/ReactSlick/MultipleRowsSlick';

export default function Home() {
    const dispatch = useDispatch()
    const arrFilm = useSelector(state => state.FilmReducer.arrFilm);
    useEffect(() => {
        const action = getApiMovieAction();
        dispatch(action);
    }, [])

    return (
        <div>
            <div id="carouselTix" className="carousel carousel__Tix slide mt-5 position-relative" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselTix" data-slide-to={0} className="active" />
                    <li data-target="#carouselTix" data-slide-to={1} />
                    <li data-target="#carouselTix" data-slide-to={2} />
                </ol>
                <div className="carousel-inner carousel__content">
                    <div className="carousel-item active">
                        <img src="https://s3img.vcdn.vn/123phim/2021/04/trang-ti-16194117174325.jpg" className="d-block w-100" alt="https://s3img.vcdn.vn/123phim/2021/04/trang-ti-16194117174325.jpg" />
                        <div className="carousel-button-play">
                            <i className="fa fa-play"></i>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://s3img.vcdn.vn/123phim/2021/04/ban-tay-diet-quy-evil-expeller-16177781815781.png" className="d-block w-100" alt="https://s3img.vcdn.vn/123phim/2021/04/ban-tay-diet-quy-evil-expeller-16177781815781.png" />
                        <div className="carousel-button-play">
                            <i className="fa fa-play"></i>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://s3img.vcdn.vn/123phim/2021/04/lat-mat-48h-16177782153424.png" className="d-block w-100" alt="https://s3img.vcdn.vn/123phim/2021/04/lat-mat-48h-16177782153424.png" />
                        <div className="carousel-button-play">
                            <i className="fa fa-play"></i>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselTix" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselTix" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
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
            <div className="container recommendMovie">
                <MultipleRows arrFilm={arrFilm}/>
            </div>
        </div>
    )
}
