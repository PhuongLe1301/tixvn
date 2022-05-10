import axios from 'axios'
import { history } from '../../App'
import { quanLyNguoiDungService } from '../../components/services/QuanLyNguoiDungService';
import { ACCESSTOKEN, CHUYEN_TAB, DAT_VE_HOAN_TAT } from '../../ultil/setting';
import { getDetailAction } from './FilmAction';
import { displayLoadingAction, hideLoadingAction } from './LoadingAction';
import { DANG_KY_ACTION, DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from './types/UserType';

export const dangKyAction = (thongTinNguoiDung) => {
    return async dispatch => {
        try {
            const result = await quanLyNguoiDungService.dangKy(thongTinNguoiDung);
            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_KY_ACTION,
                    thongTinNguoiDung: result.data.content
                })
            }
            history.goBack();
        }
        catch (errors) {
            console.log('errors', errors.response?.data);
        }
    }
}
export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data.content
                })
            }
            history.push('/');
        } catch (errors) {
            console.log('errors', errors.response?.data);
        }
    }
}
export const datVeAction = (thongTinDatVe) => {
    return async dispatch => {
        try {
            dispatch(displayLoadingAction)
            const result = await axios({
                url: 'http://movieapi.cyberlearn.vn/api/QuanLyDatVe/DatVe',
                method: 'POST',
                data: thongTinDatVe,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(ACCESSTOKEN)}`
                }
            })
            await dispatch(getDetailAction(thongTinDatVe.maLichChieu))
            dispatch({ type: DAT_VE_HOAN_TAT })
            await dispatch(hideLoadingAction)
            dispatch({ type: CHUYEN_TAB })
            console.log('thanhcong')
        }
        catch (error) {
            dispatch(hideLoadingAction)
            console.log('error', error.response.data);
        }
    }
}
export const layThongTinNguoiDungAction = () => {
    return async dispatch => {
        try {
            dispatch(displayLoadingAction)
            const result = await quanLyNguoiDungService.layThongTinNguoiDung();
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content
                });
            }
            await dispatch(hideLoadingAction)
        }
        catch (error) {
            dispatch(hideLoadingAction)
            console.log('error', error.response.data);
        }
    }
}
export const updateClientAction = (dataClient) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: 'http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
                method: 'PUT',
                data: dataClient,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(ACCESSTOKEN)}`
                }
            })
            alert('Cập Nhật Thành Công')
        }
        catch (error) {
            console.log('error', error.response.data);
        }
    }
}