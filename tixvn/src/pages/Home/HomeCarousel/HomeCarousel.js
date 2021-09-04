import React, { useEffect, Fragment, useState } from 'react';
import Trailer from '../../Trailer/Trailer';
import { useDispatch, useSelector } from 'react-redux';
import {getListCarouselAction} from '../../../redux/action/CarouselAction';

export default function HomeCarousel(props) {

    const [buttonPopup, setButtonPopup] = useState(false);

    const { arrCarousel } = useSelector(state => state.CarouselReducer);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getListCarouselAction());
    }, []);

    const renderCarousel = () => {
        return arrCarousel.map((item, index) => {
            return <Fragment key={index}>
                 <div className="carousel-item">
                <img className='w-100' src={item.hinhAnh} alt={item.hinhAnh}/>
                <div className="carousel-button-play">
                    <i className="fa fa-play" onClick={() => setButtonPopup(true)}></i>
                    {/* <Trailer trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <div>
                            <iframe width="1110" height="450" src='https://www.youtube.com/watch?v=kBY2k3G6LsM' frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </Trailer> */}
                </div>
                </div>
            </Fragment>
        })
    }

    return (
        <div id="carouselTix" className="carousel carousel__Tix slide position-relative" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselTix" data-slide-to={0} className="active" />
                <li data-target="#carouselTix" data-slide-to={1} />
                <li data-target="#carouselTix" data-slide-to={2} />
            </ol>
            <div className="carousel-inner carousel__content">
            <div className="carousel-item active">
                <img className='w-100' src="https://s3img.vcdn.vn/123phim/2021/04/trang-ti-16194117174325.jpg" alt="..." />
                <div className="carousel-button-play">
                    <i className="fa fa-play" onClick={() => setButtonPopup(true)}></i>
                    {/* <Trailer trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <div>
                            <iframe width="1110" height="450" src='https://www.youtube.com/watch?v=kBY2k3G6LsM' frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </Trailer> */}
                </div>
                   
                
            </div>
            {renderCarousel()}
            <a className="carousel-control-prev" href="#carouselTix" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselTix" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>
        </div>
    )
}
