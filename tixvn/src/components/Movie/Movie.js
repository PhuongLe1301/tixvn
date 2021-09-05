import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Trailer from '../../pages/Trailer/Trailer';

export default function Movie(props) {

    const [buttonPopup, setButtonPopup] = useState(false);

    const { movie } = props;

    return (
        <NavLink to={`/detail/${movie.maPhim}`} className="recommendMovie_item">
            <div className="movie-img position-relative px-2">
                <img className="rounded" src={movie.hinhAnh} alt={movie.tenPhim} onError={(e) => { e.target.onError = null; e.target.src = `https://picsum.photos/id/80/95` }}/>
                <div className="movie-rate position-absolute rounded text-center">
                    <p className="txtPoint text-white pt-1 mb-1">{movie.danhGia}</p>
                    <div className="movie-start">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <span><sup>1</sup>/<sub>2</sub></span>
                    </div>
                </div>
                <div className="movie-overlay"></div>
                <div className="movie-play text-white text-center">
                    <a style={{ position: 'absolute', zIndex: '10000', transform: 'translateX(-50%)' }} onClick={() => setButtonPopup(true)}>
                        <i class="fa fa-play border border-white rounded-circle"></i>
                    </a>

                </div>
                <Trailer trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <div>
                        <iframe width="1110" height="450" src={movie?.trailer} frameBorder="0" allowFullScreen></iframe>
                    </div>
                </Trailer>
            </div>

            <div className="mt-2 mb-4 font-weight-bold" style={{ height: '30px' }}>
                <span className="text-white bg-success mr-2 px-3 py-1 rounded">
                    P
                </span>
                <p className="movie-name d-inline">{movie.tenPhim}</p>
            </div>
            <div className="text-black-50 mb-5">
                100 phút
            </div>
        </NavLink>
    )
}
