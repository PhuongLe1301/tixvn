import { SET_CHI_TIET_PHONG_VE, SET_FILM_DETAIL } from "../../ultil/setting";
import { SET_LIST_MOVIE } from "../action/types/FilmType";

const stateDefault = {
    arrFilm: [{},],
    thongTinChiTiet: {},
    chiTietPhongVe:{
        content:[]
    },
}

export const FilmReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_LIST_MOVIE: {
            state.arrFilm = action.dataFilms
            return { ...state };
        }
        case SET_FILM_DETAIL: {
            state.thongTinChiTiet = action.thongTinChiTiet
            return { ...state }
        }
        case SET_CHI_TIET_PHONG_VE: {
            state.chiTietPhongVe = action.chiTietPhongVe
            return { ...state }
        }
        default: return state;
    }
}