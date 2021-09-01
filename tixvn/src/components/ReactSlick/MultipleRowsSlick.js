import React, { Component } from "react";
import { Fragment } from "react";
import Slider from "react-slick";
import Movie from "../Movie/Movie";
import styleSlick from './MultipleRowsSlick.module.css';
import './MultipleRowsSlick.css';
import { useDispatch, useSelector } from "react-redux";
import { SET_MOVIE_DANG_CHIEU, SET_MOVIE_SAP_CHIEU } from "../../redux/action/types/FilmType";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-next']}`}
      style={{
        ...style, display: "block",
        transform: 'scale(0.3)',
        top: '45%',
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
        top: '45%',
      }}
      onClick={onClick}
    />
  );
}

const MultipleRows = (props) => {

  const {dangChieu, sapChieu} = useSelector(state => state.FilmReducer);
  let activeClassDC = dangChieu === true ? 'activeMovie' : 'inactiveMovie';
  let activeClassSC = sapChieu === true ? 'activeMovie' : 'inactiveMovie';

  const dispatch = useDispatch();

  const renderFilm = () => {
    return props.arrFilm?.map((film, index) => {
      return <Fragment key={index}>
        <Movie movie={film} />
      </Fragment>
    })
  }

  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return ( 
    <div>
      <div className="col-12 mb-4 text-center btn_recommnendMovie">
        <a className={`${styleSlick[activeClassDC]} mr-5` } onClick={() => {
          const action = {type: SET_MOVIE_DANG_CHIEU}
          dispatch(action);
        }}>Đang Chiếu</a>
        <a className={`${styleSlick[activeClassSC]}`} onClick={() => {
          const action = {type: SET_MOVIE_SAP_CHIEU}
          dispatch(action);
        }}>Sắp Chiếu</a>
      </div>
      <Slider {...settings}>
        {renderFilm()}
      </Slider>
    </div>
  );
}


export default MultipleRows;