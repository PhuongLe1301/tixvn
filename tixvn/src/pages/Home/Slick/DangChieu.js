import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import Carousel from 'react-grid-carousel';
import Slider from "react-slick";
import styleSlick from '../../../components/ReactSlick/MultipleRowsSlick.module.css';
import '../../../components/ReactSlick/MultipleRowsSlick.css';
import Movie from "../../../components/Movie/Movie";

export default function DangChieu(props) {

    const { arrFilm } = props

    const renderDangChieu = () => {
        return arrFilm.filter(film => film.dangChieu == true).map((movie, index) => {
            return <Carousel.Item>
                <Movie movie={movie} />
            </Carousel.Item>
        })
    }

    const breakPoints = [
        [
            {
              breakpoint: 1024,
              cols: 3,
              rows: 2,
              gap: 20,
              loop: true,
            }
          ]
      ];

    return (
        <div>
            <Carousel cols={4} rows={2} gap={5} loop responsiveLayout={[
                {
                    breakpoint: 1024,
                    cols: 3
                },
                {
                    breakpoint: 990,
                    cols: 2
                }
            ]}>
                {renderDangChieu()}
            </Carousel>
        </div>
    )
}
