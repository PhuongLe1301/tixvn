import axios from "axios";
import { SET_CHI_TIET_PHONG_VE, SET_FILMS, SET_FILM_DETAIL } from "../../ulti/setting";

export const getApiFilmAction = (maNhom) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?maNhom=GP02',
                method: 'GET'
            })
            const action = {
                type: SET_FILMS,
                dataFilms: result.data
            }
            dispatch(action)
        } catch (errors) {
            console.log('errors', errors.response.data)
        }
    }
}
export const getFilmDetailAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method: 'GET'
            })
            const action = {
                type: SET_FILM_DETAIL,
                thongTinChiTiet: result.data
            }
            dispatch(action)
        } catch (errors) {
            console.log('errors', errors.response?.data)
        }
    }
}
export const getDetailAction = (maLichChieu) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method: 'GET'
            })
            dispatch({
                type: SET_CHI_TIET_PHONG_VE,
                chiTietPhongVe: result.data
            })
        }
        catch (errors) {
            console.log('errors', errors.response?.data)
        }
    }
}
