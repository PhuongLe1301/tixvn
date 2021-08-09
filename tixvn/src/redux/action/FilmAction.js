import axios from "axios";
import { SET_CHI_TIET_PHONG_VE, SET_FILMS, SET_FILM_DETAIL } from "../../ulti/setting";

export const getApiFilmAction = (maNhom) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
                method: 'GET'
            })
            const action = {
                type: SET_FILMS,
                dataFilms: result.data.content
            }
            dispatch(action)
        } catch (errors) {
            console.log('errors', errors.data)
        }
    }
}
export const getFilmDetailAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `http://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method: 'GET'
            })
            const action = {
                type: SET_FILM_DETAIL,
                thongTinChiTiet: result.data.content
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
                url: `http://movieapi.cyberlearn.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method: 'GET'
            })
            dispatch({
                type: SET_CHI_TIET_PHONG_VE,
                chiTietPhongVe: result.data.content
            })
        }
        catch (errors) {
            console.log('errors', errors.response?.data)
        }
    }
}
