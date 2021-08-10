import React, { Component } from 'react'
import moment from 'moment';
export default class TabInFo extends Component {
    render() {
        let { thongTinChiTiet } = this.props;
        return (
            <div className="container pt-5">
                <div className="row" style={{color:'black',fontSize:18}}>
                    <div className="col-2">
                        <ul style={{listStyle:'none'}}>
                            <li>Tên Phim:</li>
                            <li>Ngày khởi chiếu:</li>
                            <li>Đánh giá:</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <ul style={{listStyle:'none'}}>
                            <li>{thongTinChiTiet?.tenPhim}</li>
                            <li>{moment(thongTinChiTiet?.ngayKhoiChieu).format('YYYY/MM/DD')}</li>
                            <li>{thongTinChiTiet.danhGia}/10</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <h4>Nội dung:</h4>
                    </div>
                    <div className="col-4">
                        <p>{thongTinChiTiet.moTa}</p>
                    </div>
                </div>
            </div>
        )
    }
}
