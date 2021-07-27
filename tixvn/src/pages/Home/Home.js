import React from 'react';
import './Home.css';
// import { Carousel } from 'antd';
export default function Home() {

    // function onChange(a, b, c) {
    //     console.log(a, b, c);
    // }
    // const contentStyle = {
    //     height: '100%',
    //     textAlign: 'center',
    //     width: '100%',
    // };
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
        </div>
    )
}
