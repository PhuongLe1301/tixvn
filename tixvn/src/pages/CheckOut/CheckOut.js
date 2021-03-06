import React, { Fragment, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDetailAction } from '../../redux/action/FilmAction';
import './Checkout.css';
import _ from 'lodash';
import { CHANGE_TAB_ACTIVE, DAT_VE } from '../../ultil/setting';
import { datVeAction, layThongTinNguoiDungAction } from '../../redux/action/UserAction';
import { Tabs } from 'antd';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
function CheckOut(props) {
    const { chiTietPhongVe, danhSachGheDangDat } = useSelector(state => state.FilmReducer)
    const { thongTinPhim, danhSachGhe } = chiTietPhongVe;
    const { userLogin } = useSelector(state => state.UserReducer);
    const dispatch = useDispatch()
    useEffect(() => {
        let maLichChieu = props.match.params.id;
        const action = getDetailAction(maLichChieu)
        dispatch(action)
    }, [])
    const renderGhe = () => {
        return danhSachGhe?.map((ghe, index) => {

            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
            let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';

            let indexGheDD = danhSachGheDangDat?.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);
            if (indexGheDD != -1) {
                classGheDaDat = 'gheDangDat';
            }
            let gheMinhDat = '';
            if (ghe.taiKhoanNguoiDat === userLogin.taiKhoan) {
                gheMinhDat = 'gheMinhDat';
            }
            return <Fragment key={index}>
                <button onClick={() => {
                    dispatch({
                        type: DAT_VE,
                        gheDuocChon: ghe,
                    })
                }} disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat} ${gheMinhDat}`}>{ghe.daDat ? <i class="fa fa-times"></i> : ghe.stt}</button>
                {(index + 1) % 16 === 0 ? <br /> : ''}
            </Fragment>
        })
    }
    return (
        <div className="bgCOut">
            <div className="container-fluid">
                <div className="row">
                    <div className="listSeat col-9 mt-1">
                        <div>
                            <div className="d-flex ml-4">
                                <NavLink to="/"><img src="../img/hplogo.jpg" className="mt-4 mr-3" width="50" height="50" /></NavLink> 
                                <div className="mt-4 text-white">
                                    <span>{thongTinPhim?.tenCumRap}</span>
                                    <h4 className="text-white">{thongTinPhim?.ngayChieu}-{thongTinPhim?.gioChieu}-{thongTinPhim?.tenRap}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <img src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-screen.png" className="screenCine" alt="..." />
                            <br />
                            {renderGhe()}
                        </div>
                        <div className="mt-3 d-flex justify-content-center">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Gh??? ch??a ?????t</th>
                                        <th>Gh??? ??ang ?????t</th>
                                        <th>Gh??? vip</th>
                                        <th>Gh??? ???? ???????c ?????t</th>
                                        <th>Gh??? m??nh ?????t</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th><button className="ghe text-center"><i class="fa fa-check"></i></button></th>
                                        <th><button className="ghe gheDangDat text-center"><i class="fa fa-check"></i></button></th>
                                        <th><button className="ghe gheVip text-center"><i class="fa fa-check"></i></button></th>
                                        <th><button className="ghe gheDaDat text-center"><i class="fa fa-check"></i></button></th>
                                        <th><button className="ghe gheMinhDat text-center"><i class="fa fa-check"></i></button></th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="inForFilm col-3 mt-5">
                        <div className="text-success display-4 text-center">{danhSachGheDangDat.reduce((tongTien, gheDD, index) => {
                            return tongTien += gheDD.giaVe
                        }, 0).toLocaleString()}??</div>
                        <hr />
                        <div className="thongTinPhim my-2 text-white">
                            <p>T??n phim: {thongTinPhim?.tenPhim}</p>
                            <p>?????a ??i???m: {thongTinPhim?.diaChi}</p>
                            <p>Ng??y chi???u: {thongTinPhim?.ngayChieu}-{thongTinPhim?.gioChieu}</p>
                        </div>
                        <hr />
                        <div className="my-2">
                            <div className="row">
                                <div className="col-9 text-white">
                                    Gh??? : {_.sortBy(danhSachGheDangDat, ['maGhe']).map((gheDD, index) => {
                                        return <span key={index} className="font-weight-bold text-success"> {gheDD.stt} </span>
                                    })}
                                </div>
                                <div className="text-success font-weight-bold">
                                    {danhSachGheDangDat?.reduce((tongTien, gheDD, index) => {
                                        return tongTien += gheDD.giaVe
                                    }, 0).toLocaleString()}
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="my-2 text-white">
                            <p>Email: {userLogin.email}</p>
                            <hr />
                            <p>Phone: {userLogin.soDT}</p>
                        </div>
                        <div onClick={() => {
                            let thongTinDatVe = {
                                "maLichChieu": props.match.params.id,
                                "danhSachVe": danhSachGheDangDat,
                            }
                            dispatch(datVeAction(thongTinDatVe))
                        }} style={{ cursor: 'pointer' }} className="w-full bg-success text-white text-center">
                            <div className="display-4 py-2">?????T V??</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const { TabPane } = Tabs;
export default function CheckoutTab(props) {
    const { tabActive } = useSelector(state => state.FilmReducer)
    const dispatch = useDispatch()
    return <div className="checkOut">
        <Tabs defaultActiveKey="1" activeKey={tabActive} onChange={(key) => {
            dispatch({
                type: CHANGE_TAB_ACTIVE,
                number: key.toString()
            })
        }}>
            <TabPane tab="01 CH???N GH??? V?? THANH TO??N" key="1">
                <CheckOut {...props} />
            </TabPane>
            <TabPane tab="02 K???T QU??? ?????T V??" key="2">
                <KetQuaDatVe {...props} />
            </TabPane>
        </Tabs>
    </div>
}

function KetQuaDatVe(props) {
    const dispatch = useDispatch();
    const { thongTinNguoiDung } = useSelector(state => state.UserReducer)
    useEffect(() => {
        const action = layThongTinNguoiDungAction();
        dispatch(action)
    }, [])
    const renderTicketItem = () => {
        return thongTinNguoiDung?.thongTinDatVe?.map((item, index) => {
            const seats = _.first(item.danhSachGhe);
            return <div className="col-2 pt-2 text-center cardCOut" style={{lineHeight:'25px'}} key={index}>
                <img className="card-imageCout" src={item.hinhAnh} />
                <h2 style={{height:150}}>{item.tenPhim}</h2>
                <p>Gi??? Chi???u:{moment(item.ngayDat).format('hh:mmA')} - Ng??y:{moment(item.ngayDat).format('DD/MM/YYYY')}</p>
                <p>?????a ??i???m: {seats.tenHeThongRap}</p>
                <p>T??n r???p : {seats.tenCumRap} - Gh??? {item.danhSachGhe.map((ghe, index) => {
                    return <span key={index} style={{ color: 'green' }}> [{ghe.tenGhe}] </span>
                })}</p>
            </div>
        })
    }

    return <div className="p-5">
        <h1 className="text-center text-white">L???ch s??? ?????t v?? kh??ch h??ng</h1>
        <section className="container">
            <div className="row cardDesign">
                {renderTicketItem()}
            </div>

        </section>

    </div>
}