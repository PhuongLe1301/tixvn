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
                {(index + 1) % 16 === 0 ? <br /> : ''}
            </Fragment>
        })
    }

    console.log('chiTietPhongVe', chiTietPhongVe)
    return (
        <div className="bgCOut">
            <div className="container-fluid">
                <div className="row">
                    <div className="listSeat col-9 mt-5">
                        <div>
                            <div className="d-flex ml-4">
                                <img src="https://s3img.vcdn.vn/123phim/2018/09/1721cfa98768f300c03792e25ceb0191.png" className="mt-4 mr-3" width="50" height="50" />
                                <div className="mt-4 text-white">
                                    <span>CineStar</span>
                                    <h4 className="text-white">{thongTinPhim?.ngayChieu}-{thongTinPhim?.gioChieu}-{thongTinPhim?.tenRap}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <img src="https://tix.vn/app/assets/img/icons/screen.png" className="screenCine" alt="..." />
                            <br />
                            {renderGhe()}
                        </div>
                    </div>
                    <div className="inForFilm col-3 mt-5">
                        <div className="text-success display-4 text-center"> 0Đ</div>
                        <hr />
                        <div className="thongTinPhim my-2 text-white">
                            <p>Tên phim: Ten Phim</p>
                            <p>Địa điểm: Dia Diem</p>
                            <p>Ngày chiếu: Ngay Chieu</p>
                        </div>
                        <hr />
                        <div className="my-2">
                            <div className="row">
                                <div className="col-9 text-white">
                                    Ghế :
                                </div>
                                <div className="text-success font-weight-bold">

                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="my-2 text-white">
                            <p>Email: abc@gmail.com</p>
                            <hr />
                            <p>Phone: 12321321321</p>
                        </div>
                        <div style={{ cursor: 'pointer' }} className="w-full bg-success text-white text-center">
                            <div className="display-4 py-2">ĐẶT VÉ</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
