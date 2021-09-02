import { ACCESSTOKEN, USER_LOGIN } from "../../ultil/setting";
import { DANG_KY_ACTION, DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "../action/types/UserType";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
    userLogin: user,
    userRegister: {},
    thongTinNguoiDung:{
        
    }
}

export const UserReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case DANG_KY_ACTION: {
            const { thongTinNguoiDung } = action;
            return { ...state, userRegister: thongTinNguoiDung }
        }
        case DANG_NHAP_ACTION: {
            const { thongTinDangNhap } = action;
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
            localStorage.setItem(ACCESSTOKEN, thongTinDangNhap.accessToken);
            return { ...state, userLogin: thongTinDangNhap }
        }
        case SET_THONG_TIN_NGUOI_DUNG:{
            state.thongTinNguoiDung=action.thongTinNguoiDung;
            return {...state}
        }
        default:
            return { ...state }
    }
}