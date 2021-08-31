import { CHANGE_TAB_ACTIVE, CHUYEN_TAB, DAT_VE, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE, SET_FILM_DETAIL  } from "../../ultil/setting";
import { SET_LIST_MOVIE } from "../action/types/FilmType";

const stateDefault = {
    arrFilm: [{},],
    thongTinChiTiet: {},
    chiTietPhongVe: {
        content: []
    },
    danhSachGheDangDat: [],
    danhSachGheKhachDat:[{maGhe:47401},{maGhe:47402}],
    tabActive: "1"
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