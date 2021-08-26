import axios from 'axios'
import { history } from '../../App'
import { quanLyNguoiDungService } from '../../components/services/QuanLyNguoiDungService';
import {DANG_NHAP_ACTION} from './types/UserType';

export const dangKyAction = (thongTinNguoiDung) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: 'http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangKy',
                method: 'POST',
                data: thongTinNguoiDung
            });
            history.push('/');
            console.log('result', result.data);
        }
        catch (errors) {
            console.log('errors', errors.response?.data);
        }
    }
}

export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try{
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);

            if(result.data.statusCode === 200){
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap : result.data.content
                })
            }

            console.log('result', result);
        }catch (errors) {
            console.log('errors', errors.response?.data)   ;
        }
    }
}



