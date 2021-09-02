import { ADD_USER, ADD_USER_DONE, EDIT_USER, GET_API_USER } from "../action/types/UserType"

const stateDefault = {
    danhSachNguoiDung: [],
    dataUser: [],
    editData: {}

}
export const AdminReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_API_USER: {
            state.danhSachNguoiDung = action.danhSachNguoiDung
            return { ...state }
        }
        case ADD_USER: {
            state.dataUser = action.dataUser
            return { ...state }
        }
        case EDIT_USER: {
            state.editData = action.editData;
            return { ...state }
        }
        default: return state;
    }
}