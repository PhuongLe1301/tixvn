import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";
import styleSlick from '../../../components/ReactSlick/MultipleRowsSlick.module.css';
import '../../../components/ReactSlick/MultipleRowsSlick.css';
import Movie from "../../../components/Movie/Movie";

export default function DangChieu(props) {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} ${styleSlick['slick-next']}`}
                style={{
                    ...style, display: "block",
                    transform: 'scale(0.3)',
                    top: '42%',
                    right: 0
                }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} ${styleSlick['slick-prev']}`}
                style={{
                    ...style, display: "block",
                    transform: 'scale(0.15)',
                    left: '-32px',
                    top: '42%',
                }}
                onClick={onClick}
            />
        );
    }

    const { arrFilm } = props


    const renderSapChieu = () => {
        return arrFilm.filter(film => film.dangChieu != true).map((movie, index) => {
            return <Fragment key={index}>
                <Movie movie={movie} />
            </Fragment>
        })
    }

    const settings = {
        className: "center variable-width",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        rows: 1,
        slidesPerRow: 2,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div>
            <Slider {...settings}>
                {renderSapChieu()}
            </Slider>
        </div>
    )
}
