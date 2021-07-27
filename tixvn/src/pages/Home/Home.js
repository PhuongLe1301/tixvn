import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { getApiFilmAction } from '../../redux/action/FilmAction';
import { useDispatch, useSelector } from 'react-redux'
import './Home.css';
// import { Carousel } from 'antd';
export default function Home() {
    const dispatch = useDispatch()
    const arrFilm = useSelector(state => state.FilmReducer.arrFilm);
    console.log('thong tin phim', arrFilm)
    useEffect(() => {
        const action = getApiFilmAction('GP01')
        dispatch(action)
    }, [])
    return (

        <div className="container_fluid">

            {/* <Carousel afterChange={onChange}>
                <div className="mt-5">
                    <img src="" style={contentStyle} />
                </div>
                <div>
                    <img src="" style={contentStyle} />
                </div>
                <div>
                    <img src="" style={contentStyle} />
                    
                </div>

            </Carousel>, */}
            <div id="carouselTix" className="carousel slide mt-5" data-ride="carousel">
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
                    {/* https://tix.vn/app/assets/img/icons/back-session.png */}
                </a>
                <a className="carousel-control-next" href="#carouselTix" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div>
                <h1 className="text-center display-4">Danh sách phim</h1>
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
