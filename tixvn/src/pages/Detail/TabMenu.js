import React, { Component } from 'react'
import { Divider, Tabs } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

const { TabPane } = Tabs
export default class TabMenu extends Component {
    renderHeThongRap = () => {
        return this.props.heThongRapChieu?.map((htr, index) => {
            return <TabPane tab={<div>
                <img src={htr.logo} width="50" height="50" />
            </div>} key={index}>
                {htr.cumRapChieu.map((cumRap, index) => {
                    return <div key={index}>
                        <div className="d-flex mt-2 ml-2" >
                            <div>
                                <img src={htr.logo} width="50" height="50" alt="..." />
                            </div>
                            <div className="ml-2 text-white">
                                <p>{cumRap.tenCumRap}</p>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="row">
                                {/*Hàm slice(vị trí bắt đầu, số phần tử lấy ) */}
                                {cumRap.lichChieuPhim.slice(0, 12).map((lichChieu, index) => {
                                    return <div className="col-3 mt-2 text-white" key={index}>
                                        <NavLink to={`/checkout/${lichChieu.maLichChieu}`} >{moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</NavLink>
                                        <p>{moment(lichChieu.ngayChieuGioChieu).format('DD/MM')}</p>
                                    </div>
                                })}
                            </div>
                        </div>

                    </div>
                })}
            </TabPane>
        })
    }
    render() {
        return (
            <div>
                <Tabs tabPosition={'left'}>
                    {this.renderHeThongRap()}
                </Tabs>
               
            </div>
        );
    }
}


