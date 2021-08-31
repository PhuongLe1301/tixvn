import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Movie(props) {

    const {movie} =  props;

    return (       
        <NavLink to={`/detail/${movie.maPhim}`} className="recommendMovie_item">
            <div className="movie-img position-relative px-2">
                <img className="rounded" src= {movie.hinhAnh} alt={movie.tenPhim} />
                <div className="movie-rate position-absolute rounded text-center">
                    <p className="txtPoint text-white pt-1 mb-1">10</p>
                    <div className="movie-start">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
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
                <p className="movie-name d-inline">{movie.tenPhim}</p>
            </div>
            <div className="text-black-50 mt-4">
                100 phút
            </div>
        </NavLink>
        
    )
}
