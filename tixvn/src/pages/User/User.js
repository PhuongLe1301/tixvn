import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layThongTinNguoiDungAction } from '../../redux/action/UserAction';
import KetQuaDatVe from './KetQuaDatVe';
import UserDetail from './UserDetail';
export default function User(props) {
    const { thongTinNguoiDung } = useSelector(state => state.UserReducer)
    const dispatch = useDispatch();
    // console.log(thongTinNguoiDung)
    useEffect(() => {
        const action = layThongTinNguoiDungAction();
        dispatch(action)
    }, [])
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <div>
            <div className="titleIF">
                <h2 className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Thông Tin Tài Khoản</h2>
                <h2 className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Lịch Sử Đặt Vé</h2>
            </div>
            <div className={toggleState === 1 ? "detailBottom activeDetail" : "detailBottom"}>
                <UserDetail thongTinNguoiDung={thongTinNguoiDung}/>
            </div>
            <div className={toggleState === 2 ? "detailBottom activeDetail" : "detailBottom"}>
                <KetQuaDatVe thongTinDatVe={thongTinNguoiDung.thongTinDatVe}/>
            </div>
        </div>
    )
}
