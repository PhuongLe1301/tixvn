import React, { useEffect, useState } from 'react'
import './New.css'
import DangChieu from './DangChieu'
import SapChieu from './SapChieu'
import { useDispatch, useSelector } from 'react-redux'
import { getApiMovieAction } from '../../redux/action/FilmAction'
export default function News(props) {

    const dispatch = useDispatch()
    const arrFilm = useSelector(state => state.FilmReducer.arrFilm);
    console.log('test', arrFilm)
    useEffect(() => {
        const action = getApiMovieAction();
        dispatch(action);
    }, [])

    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index)
    }
    return <div className="bG">
        <div className="titleIF">
            <h2 className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Dang Chieu</h2>
            <h2 className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Sap Chieu</h2>
        </div>
        <div className={toggleState === 1 ? "detailBottom activeDetail" : "detailBottom"}>
            <DangChieu arrFilm={arrFilm} />
        </div>
        <div className={toggleState === 2 ? "detailBottom activeDetail" : "detailBottom"}>
            <SapChieu arrFilm={arrFilm}/>
        </div>
    </div>
}