import axios from "axios";
import { history } from "../../App";
import { manageMovieService } from "../../components/services/MangageMovieService";
import { SET_CHI_TIET_PHONG_VE, SET_FILMS, SET_FILM_DETAIL } from "../../ultil/setting";
import { SET_LIST_MOVIE } from './types/FilmType';

export const getApiMovieAction = () =>{
    return async (dispatch) => {
        try {
            const result = await manageMovieService.getMovieList();

            dispatch({
                type: SET_LIST_MOVIE,
                dataFilms: result.data.content
            })
        }catch(errors){
            console.log('errors', errors);
        }
    }
}

export const addMovieUploadImageAction = (formData) => {
    return async (dispatch) => {
        try{

            const result = await manageMovieService.addMovieUploadImage(formData);
            alert('Thêm phim thành công!');
            console.log('result', result.data.content);
            history.push('/admin/quanlyphim');

        }catch(errors){
            console.log('errors', errors);
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
