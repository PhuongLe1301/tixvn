import axios from 'axios'
import { history } from '../../App'

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



