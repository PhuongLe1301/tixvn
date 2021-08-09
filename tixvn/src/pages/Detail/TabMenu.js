import React, { Component } from 'react'
import { Divider, Tabs } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment';


const { TabPane } = Tabs
export default class TabMenu extends Component {
    renderHeThongRap = () => {
        return this.props.heThongRapChieu?.map((htr, index) => {
            return <TabPane tab={<div style={{display:'flex',alignItems:'center'}}>
                <img src={htr.logo} width="50" height="50" />
                <div className="text-center ml-2">
                    {htr.tenHeThongRap}
                </div>
            </div>} key={index}>
                {htr.cumRapChieu.map((cumRap, index) => {
                    return <div className="mt-4" key={index}>
                        <div className="d-flex">
                            <img style={{width:50,height:50}} src={cumRap.hinhAnh}/>
                            <div className="ml-2">
                               <h6>{cumRap.tenCumRap}</h6>
                               <p>{cumRap.diaChi}</p>
                            </div>
                        </div>
                        <div className="row">
                                {cumRap.lichChieuPhim?.slice(0,12).map((lichChieu,index)=>{{
                                    return <div className="col-3" key={index}>
                                        <NavLink style={{color:'green',fontWeight:'bold'}} to={`/checkout/${lichChieu.maLichChieu}`} >{moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</NavLink>
                                    </div>
                                }})}
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
{/* <NavLink to={`/checkout/${lichChieu.maLichChieu}`} >{moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</NavLink> */}

