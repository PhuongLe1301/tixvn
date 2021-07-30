import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { getApiFilmAction } from '../../redux/action/FilmAction';
import { useDispatch, useSelector } from 'react-redux'
import './Home.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

export default function Home() {
    const dispatch = useDispatch()
    const arrFilm = useSelector(state => state.FilmReducer.arrFilm);
    console.log('thong tin phim', arrFilm)
    useEffect(() => {
        const action = getApiFilmAction('GP01')
        dispatch(action)
    }, [])

    const optionsCarousel = {
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        items: 1,
    };

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
                            <i class="fa fa-play"></i>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://s3img.vcdn.vn/123phim/2021/04/ban-tay-diet-quy-evil-expeller-16177781815781.png" className="d-block w-100" alt="https://s3img.vcdn.vn/123phim/2021/04/ban-tay-diet-quy-evil-expeller-16177781815781.png" />
                        <div className="carousel-button-play">
                            <i class="fa fa-play"></i>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://s3img.vcdn.vn/123phim/2021/04/lat-mat-48h-16177782153424.png" className="d-block w-100" alt="https://s3img.vcdn.vn/123phim/2021/04/lat-mat-48h-16177782153424.png" />
                        <div className="carousel-button-play">
                            <i class="fa fa-play"></i>
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
                <div className="col-12 text-center btn_recommnendMovie">
                    <a className="mr-5 active">Đang Chiếu</a>
                    <a className="inactive">Sắp Chiếu</a>
                </div>
                <OwlCarousel className="owl-theme my-5" {...optionsCarousel} >
                    <div className="item">
                        <div className="d-flex justify-content-center">
                            <div className="recommendMovie_item mr-3">
                                <div className="movie-img position-relative">
                                    <img className="rounded" src="https://s3img.vcdn.vn/mobile/123phim/2021/04/trang-ti-16194120693380_215x318.jpg" alt="https://s3img.vcdn.vn/mobile/123phim/2021/04/trang-ti-16194120693380_215x318.jpg"/>
                                    <div className="movie-rate position-absolute rounded text-center">
                                        <p className="txtPoint text-white pt-1 mb-1">6.4</p>
                                        <div className="movie-start">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <span><sup>1</sup>/<sub>2</sub></span>
                                        </div>
                                    </div>
                                    <div className="movie-overlay"></div>
                                    <div className="movie-play text-white text-center w-100">
                                        <i class="fa fa-play border border-white rounded-circle"></i>
                                    </div>
                                </div>
                                <div className="mt-2 font-weight-bold">
                                    <span className="text-white bg-success mr-2 px-3 py-1 rounded">
                                        P
                                    </span>
                                    <p className="movie-name d-inline">Trạng Tí Phiêu Lưu Ký</p>
                                </div>
                                <div className="text-black-50 mt-4">
                                    100 phút
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="d-flex justify-content-center">
                            <div className="recommendMovie_item mr-3">
                                <div className="movie-img position-relative">
                                    <img className="rounded" src="https://s3img.vcdn.vn/mobile/123phim/2021/04/trang-ti-16194120693380_215x318.jpg" alt="https://s3img.vcdn.vn/mobile/123phim/2021/04/trang-ti-16194120693380_215x318.jpg"/>
                                    <div className="movie-rate position-absolute rounded">
                                        <p className="text-white text-center">6.4</p>
                                        <div className="movie-start">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 font-weight-bold">
                                    <span className="text-white bg-success mr-2 px-3 py-1 rounded">
                                        P
                                    </span>
                                    <p className="movie-name d-inline">Trạng Tí Phiêu Lưu Ký</p>
                                </div>
                                <div className="text-black-50 mt-4">
                                    100 phút
                                </div>
                            </div>
                            <div className="recommendMovie_item mr-3">
                                <div className="movie-img position-relative">
                                    <img className="rounded" src="https://s3img.vcdn.vn/mobile/123phim/2021/04/trang-ti-16194120693380_215x318.jpg" alt="https://s3img.vcdn.vn/mobile/123phim/2021/04/trang-ti-16194120693380_215x318.jpg"/>
                                    <div className="movie-rate position-absolute rounded">
                                        <p className="text-white text-center">6.4</p>
                                        <div className="movie-start">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 font-weight-bold">
                                    <span className="text-white bg-success mr-2 px-3 py-1 rounded">
                                        P
                                    </span>
                                    <p className="movie-name d-inline">Trạng Tí Phiêu Lưu Ký</p>
                                </div>
                                <div className="text-black-50 mt-4">
                                    100 phút
                                </div>
                            </div>
                            <div className="recommendMovie_item mr-3">
                                <div className="movie-img position-relative">
                                    <img className="rounded" src="https://s3img.vcdn.vn/mobile/123phim/2021/04/trang-ti-16194120693380_215x318.jpg" alt="https://s3img.vcdn.vn/mobile/123phim/2021/04/trang-ti-16194120693380_215x318.jpg"/>
                                    <div className="movie-rate position-absolute rounded">
                                        <p className="text-white text-center">6.4</p>
                                        <div className="movie-start">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 font-weight-bold">
                                    <span className="text-white bg-success mr-2 px-3 py-1 rounded">
                                        P
                                    </span>
                                    <p className="movie-name d-inline">Trạng Tí Phiêu Lưu Ký</p>
                                </div>
                                <div className="text-black-50 mt-4">
                                    100 phút
                                </div>
                            </div>
                            <div className="recommendMovie_item mr-3">
                                <div className="movie-img position-relative">
                                    <img className="rounded" src="https://s3img.vcdn.vn/mobile/123phim/2021/04/trang-ti-16194120693380_215x318.jpg" alt="https://s3img.vcdn.vn/mobile/123phim/2021/04/trang-ti-16194120693380_215x318.jpg"/>
                                    <div className="movie-rate position-absolute rounded">
                                        <p className="text-white text-center">6.4</p>
                                        <div className="movie-start">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 font-weight-bold">
                                    <span className="text-white bg-success mr-2 px-3 py-1 rounded">
                                        P
                                    </span>
                                    <p className="movie-name d-inline">Trạng Tí Phiêu Lưu Ký</p>
                                </div>
                                <div className="text-black-50 mt-4">
                                    100 phút
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-5">
                            <div className="recommendMovie_item mr-3">
                                <div className="movie-img position-relative">
                                    <img className="rounded" src="https://s3img.vcdn.vn/mobile/123phim/2021/04/trang-ti-16194120693380_215x318.jpg" alt="https://s3img.vcdn.vn/mobile/123phim/2021/04/trang-ti-16194120693380_215x318.jpg"/>
                                    <div className="movie-rate position-absolute rounded">
                                        <p className="text-white text-center">6.4</p>
                                        <div className="movie-start">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 font-weight-bold">
                                    <span className="text-white bg-success mr-2 px-3 py-1 rounded">
                                        P
                                    </span>
                                    <p className="movie-name d-inline">Trạng Tí Phiêu Lưu Ký</p>
                                </div>
                                <div className="text-black-50 mt-4">
                                    100 phút
                                </div>
                            </div>
                            <div className="recommendMovie_item mr-3">
                                <div className="movie-img position-relative">
                                    <img className="rounded" src="https://s3img.vcdn.vn/mobile/123phim/2021/04/trang-ti-16194120693380_215x318.jpg" alt="https://s3img.vcdn.vn/mobile/123phim/2021/04/trang-ti-16194120693380_215x318.jpg"/>
                                    <div className="movie-rate position-absolute rounded">
                                        <p className="text-white text-center">6.4</p>
                                        <div className="movie-start">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 font-weight-bold">
                                    <span className="text-white bg-success mr-2 px-3 py-1 rounded">
                                        P
                                    </span>
                                    <p className="movie-name d-inline">Trạng Tí Phiêu Lưu Ký</p>
                                </div>
                                <div className="text-black-50 mt-4">
                                    100 phút
                                </div>
                            </div>
                            <div className="recommendMovie_item mr-3">
                                <div className="movie-img position-relative">
                                    <img className="rounded" src="https://s3img.vcdn.vn/mobile/123phim/2021/04/trang-ti-16194120693380_215x318.jpg" alt="https://s3img.vcdn.vn/mobile/123phim/2021/04/trang-ti-16194120693380_215x318.jpg"/>
                                    <div className="movie-rate position-absolute rounded">
                                        <p className="text-white text-center">6.4</p>
                                        <div className="movie-start">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 font-weight-bold">
                                    <span className="text-white bg-success mr-2 px-3 py-1 rounded">
                                        P
                                    </span>
                                    <p className="movie-name d-inline">Trạng Tí Phiêu Lưu Ký</p>
                                </div>
                                <div className="text-black-50 mt-4">
                                    100 phút
                                </div>
                            </div>
                            <div className="recommendMovie_item mr-3">
                                <div className="movie-img position-relative">
                                    <img className="rounded" src="https://s3img.vcdn.vn/mobile/123phim/2021/04/trang-ti-16194120693380_215x318.jpg" alt="https://s3img.vcdn.vn/mobile/123phim/2021/04/trang-ti-16194120693380_215x318.jpg"/>
                                    <div className="movie-rate position-absolute rounded">
                                        <p className="text-white text-center">6.4</p>
                                        <div className="movie-start">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 font-weight-bold">
                                    <span className="text-white bg-success mr-2 px-3 py-1 rounded">
                                        P
                                    </span>
                                    <p className="movie-name d-inline">Trạng Tí Phiêu Lưu Ký</p>
                                </div>
                                <div className="text-black-50 mt-4">
                                    100 phút
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>

            <div>
                <h1 className="my-5 text-center display-4">Danh sách phim</h1>
                <div className="row mt-5" id="theaterList">
                    {arrFilm?.map((film, index) => {
                        return <div className="col-3" key={index}>
                            <div className="card text-white bg-dark">
                                <img className="card-img-top" src={film.hinhAnh} style={{ width: 350, height: 300 }} alt />
                                <div className="card-body">
                                    <h4 className="card-title">{film.tenPhim}</h4>
                                </div>
                                <NavLink className="btn btn-success" to={`/detail/${film.maPhim}`}>ĐẶT VÉ</NavLink>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
