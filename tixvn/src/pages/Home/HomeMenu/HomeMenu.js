import React, { Component, Fragment } from 'react';
import { Tabs, Radio, Space } from 'antd';
import './HomeMenu.css';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

const { TabPane } = Tabs;

export default class HomeMenu extends React.PureComponent {

    // componentDidMount(){

    // }

    renderHeThongRap = () => {
        return this.props.heThongRapChieu?.map((heThongRap, index) => {
            return <TabPane key={index} tab={<div>
                <img src={heThongRap.logo} alt={heThongRap.logo} width={50} />
            </div>}>
                <Tabs tabPosition={'left'} className="homeMenu_movie">
                    {heThongRap.lstCumRap?.slice(0,6).map((cumRap, index) => {
                        return <TabPane key={index} tab={
                            <Fragment>
                                <div className="d-flex" width={200}>
                                    <div>
                                        <img className="m-2" src="https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-phu-tho-15383865322515.jpg" alt="hinhrap" width={50} height={50} />
                                    </div>
                                    <div className="ml-2 text-left">
                                        <p className='font-weight-bold text-dark'>{cumRap.tenCumRap}</p>
                                        <p style={{ color: '#949494', fontSize: '12px' }}>{cumRap.diaChi.length > 25 ? cumRap.diaChi.substr(0, 50) + '...' : cumRap.diaChi}</p>
                                        <NavLink to={`/detail/${cumRap.maCumRap}`} className="text-danger">[chi tiết]</NavLink>
                                    </div>
                                </div> 
                                <hr style={{opacity: '0.2', width: '325px'}}/>
                            </Fragment>}>
                            {cumRap.danhSachPhim.slice(0, 5).map((movie, index) => {
                                return <Fragment key={index}>
                                    <div className="d-flex my-2">
                                        <div className="d-flex">
                                            <img width={60} height={80} src={movie.hinhAnh} alt={movie.tenPhim} onError={(e)=>{
                                                e.target.oneerror = null; 
                                                e.target.src='https://picsum.photos/60/80'
                                            }}/>
                                            <div className="ml-2">
                                                <h3 className='mb-0'>{movie.tenPhim}</h3>
                                                <p>{cumRap.diaChi}</p>

                                                <div className="" style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'10px'}}>
                                                    {movie.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                                                        return <NavLink className='text-success' style={{fontSize: '20px', opacity:'0.7'}} to={`/checkout/${lichChieu.maLichChieu}`} key={index}>{moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</NavLink>
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr style={{opacity: '0.2'}}/>
                                </Fragment>
                            })}
                        </TabPane>
                    })}
                </Tabs>


            </TabPane>
        })
    }

    render() {
        // console.log('props hethongrapchieu', this.props);
        return (
            <Tabs tabPosition={'left'} className="homeMenu border p-2 mb-3">
                {this.renderHeThongRap()}
            </Tabs>
        )
    }
}
