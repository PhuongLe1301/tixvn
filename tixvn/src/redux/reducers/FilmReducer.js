import { CHANGE_TAB_ACTIVE, CHUYEN_TAB, DAT_VE, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE, SET_FILM_DETAIL  } from "../../ultil/setting";
import { SET_INFO_MOVIE, SET_LIST_MOVIE, SET_MOVIE_DANG_CHIEU, SET_MOVIE_SAP_CHIEU } from "../action/types/FilmType";

const stateDefault = {
    arrFilm: [{},],
    dangChieu: true,
    sapChieu: true,
    arrFilmDefault: [],
    thongTinChiTiet: {},
    chiTietPhongVe: {
        content: []
    },
    danhSachGheDangDat: [],
    tabActive: "1",
    thongTinPhim:{}
}

export const FilmReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_LIST_MOVIE: {
            state.arrFilm = action.dataFilms;
            state.arrFilmDefault = state.arrFilm;
            return { ...state }
        }
        case SET_MOVIE_DANG_CHIEU: {
            state.dangChieu = !state.dangChieu;
            state.arrFilm = state.arrFilmDefault.filter(movie => movie.dangChieu === state.dangChieu);
            return { ...state }
        }
        case SET_MOVIE_SAP_CHIEU: {
            state.sapChieu = !state.sapChieu;
            state.arrFilm = state.arrFilmDefault.filter(movie => movie.sapChieu === state.sapChieu);
            return {... state }
        }
        case SET_INFO_MOVIE:{
            state.thongTinPhim = action.thongTinPhim;
            return {...state}
        }
        case SET_FILM_DETAIL: {
            state.thongTinChiTiet = action.thongTinChiTiet
            return { ...state }
        }
        case SET_CHI_TIET_PHONG_VE: {
            state.chiTietPhongVe = action.chiTietPhongVe
            return { ...state }
        }
        case DAT_VE: {
            let danhSachGheCapNhat = [...state.danhSachGheDangDat];
            let index = danhSachGheCapNhat.findIndex(gheDD => gheDD.maGhe === action.gheDuocChon.maGhe)
            if (index !== -1) {
                danhSachGheCapNhat.splice(index, 1);
            }
            else {
                danhSachGheCapNhat.push(action.gheDuocChon);
            }
            console.log(action)
            return { ...state, danhSachGheDangDat: danhSachGheCapNhat }
        }
        case DAT_VE_HOAN_TAT: {
            state.danhSachGheDangDat = []
            return { ...state }
        }
        case CHUYEN_TAB: {
            state.tabActive = "2";
            return { ...state }
        }
        case CHANGE_TAB_ACTIVE: {
            state.tabActive = action.number;
            return { ...state }
        }
        default: return state;
    }
}