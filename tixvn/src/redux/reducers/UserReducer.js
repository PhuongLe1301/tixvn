import { ACCESSTOKEN, USER_LOGIN } from "../../ultil/setting";
import {DANG_NHAP_ACTION} from "../action/types/UserType";

let user = {};
if(localStorage.getItem(USER_LOGIN)){
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
    userLogin: user
}

export const UserReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case DANG_NHAP_ACTION:{
            const {thongTinDangNhap} = action;
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
            // localStorage.setItem(ACCESSTOKEN, thongTinDangNhap.accessToken);

            return {...state, userLogin:thongTinDangNhap}
        }

        default:
            return { ...state }
    }
}