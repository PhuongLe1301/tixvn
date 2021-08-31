import React, { Component } from "react";
import { Fragment } from "react";
import Slider from "react-slick";
import Movie from "../Movie/Movie";
import styleSlick from './MultipleRowsSlick.module.css';
import './MultipleRowsSlick.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-next']}`}
      style={{ ...style, display: "block",
              transform: 'scale(0.3)',
              top:'45%',
              right: 0}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: "block", 
              transform: 'scale(0.15)',
              left: '-32px',
              top: '45%',}}
      onClick={onClick}
    />
  );
}

export default class MultipleRows extends Component {

  renderFilm = () => {
    return this.props.arrFilm?.map((film, index) => {
        return <Fragment key={index}>
          <Movie movie= {film}/>
        </Fragment>
    })
  }

  render() {
    const settings = {
      className: "center variable-width",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
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
          {this.renderFilm()}
        </Slider>
      </div>
    );
  }
}