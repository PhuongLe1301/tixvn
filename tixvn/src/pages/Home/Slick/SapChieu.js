import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";
import styleSlick from '../../../components/ReactSlick/MultipleRowsSlick.module.css';
import '../../../components/ReactSlick/MultipleRowsSlick.css';
import Movie from "../../../components/Movie/Movie";
import Carousel from 'react-grid-carousel';

export default function DangChieu(props) {

    const { arrFilm } = props


    const renderSapChieu = () => {
        return arrFilm.filter(film => film.dangChieu != true).map((movie, index) => {
            return <Carousel.Item>
                <Movie movie={movie} />
            </Carousel.Item>
        })
    }

    const breakPoints = [
        [
            {
              breakpoint: 700,
              cols: 3,
              rows: 1,
              gap: 10,
              loop: true,
              autoplay: 1000
            }
          ]
      ];

    return (
        <div>
            <Carousel cols={5} rows={2} gap={10} loop breakPoints={breakPoints}>
                {renderSapChieu()}
            </Carousel>
        </div>
    )
}
