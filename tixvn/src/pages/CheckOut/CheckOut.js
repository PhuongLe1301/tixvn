import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDetailAction } from '../../redux/action/FilmAction';
import './Checkout.css';
import moment from 'moment';
export default function CheckOut(props) {
    const { chiTietPhongVe } = useSelector(state => state.FilmReducer)
    const { thongTinPhim, danhSachGhe } = chiTietPhongVe;
    const dispatch = useDispatch()
    useEffect(() => {
        let maLichChieu = props.match.params.id;
        const action = getDetailAction(maLichChieu)
        dispatch(action)
    }, [])

    const renderGhe = () => {
        return danhSachGhe?.map((ghe, index) => {
            return <Fragment key={index}>
                <button className="ghe">{ghe.stt}</button>
                {(index+1)%16===0?<br/>:''}
            </Fragment>
        })
    }

    console.log('chiTietPhongVe', chiTietPhongVe)
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-9 mt-5">
                    <div>
                        <div className="d-flex ml-4">
                            <img src="https://s3img.vcdn.vn/123phim/2018/09/1721cfa98768f300c03792e25ceb0191.png" className="mt-4 mr-3" width="50" height="50" />
                            <div className="mt-4">
                                <span>CineStar</span>
                                <h4>{moment(thongTinPhim?.ngayChieu).format('MM/DD')}-{thongTinPhim?.gioChieu}-{thongTinPhim?.tenRap}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <img src="https://tix.vn/app/assets/img/icons/screen.png" alt="..." />
                        <br />
                        {renderGhe()}
                    </div>

                </div>
            </div>
        </div>
    )
}
