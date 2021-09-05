import React from 'react'
import moment from 'moment';
import './KetQuaDatVe.css'

export default function KetQuaDatVe(props) {
    const { thongTinDatVe } = props
    const renderData = ()=>{
        return thongTinDatVe?.map((item,index)=>{
            return <tr>
                <td>{item.tenPhim}</td>
                <td>{item.thoiLuongPhim}</td>
                <td>{moment(item.ngayDat).format('DD/MM/YYYY')} - {moment(item.ngayDat).format('hh:mm A')}</td>
                <td>{item.danhSachGhe[0].tenHeThongRap}</td>
                <td>{item.maVe}</td>
                <td>{item.danhSachGhe.map((ghe,index)=>{
                    return <span> [{ghe.tenGhe}] </span>
                })}</td>
                <td>{(item.giaVe).toLocaleString()}</td>
                <td>{(item.giaVe*item.danhSachGhe.length).toLocaleString()}</td>
            </tr>
        })
    }
    return (
        <table className="customers">
        <tr>
          <th>Tên Phim</th>
          <th>Thời Lượng Phim</th>
          <th>Ngày Đặt</th>
          <th>Tên Rạp</th>
          <th>Mã vé</th>
          <th>Tên Ghế</th>
          <th>Giá vé</th>
          <th>Tổng tiền</th>
        </tr>
        {renderData()}
        
      </table>
    )
}
