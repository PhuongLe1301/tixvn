import { SET_CHI_TIET_PHONG_VE, SET_FILMS, SET_FILM_DETAIL } from "../../ultil/setting";

const stateDefault = {
    arrFilm: [{ maPhim: 1, tenPhim: 'ABC', hinhAnh: 'https://picsum.photos/200/200' }],
    thongTinChiTiet: {},
    chiTietPhongVe:{
        content:[]
    },
}

export const FilmReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_FILMS: {
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