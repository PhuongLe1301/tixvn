import axios from 'axios'
import { history } from '../../App'
import { ACCESSTOKEN } from '../../ultil/setting'
import { ADD_USER, EDIT_USER, GET_API_USER, USERID } from './types/UserType'




export const getApiUserAction = () => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${USERID}`,
                method: 'GET'
            })
            const action = {
                type: GET_API_USER,
                danhSachNguoiDung: result.data.content
            }
            dispatch(action)
        }
        catch (errors) {
            console.log('errors', errors.response?.data)
        }
    }
}

export const addUserAction = (dataUser) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/ThemNguoiDung',
                method: 'POST',
                data: dataUser,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(ACCESSTOKEN)}`
                }
            })
            const action = {
                type: ADD_USER,
                dataUser: result.data.content
            }
            dispatch(action)
            alert('Thêm Người Dùng Thành Công!')
            window.location.reload();

        }
        catch (errors) {
            console.log('errors', errors.response?.data)
        }
    }
}
export const loadDataUserAction = (tuKhoa) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${USERID}&tuKhoa=${tuKhoa}`,
                method: 'GET'
            })
            const action = {
                type: EDIT_USER,
                editData: result.data.content[0]
            }
            dispatch(action)
        }
        catch (errors) {
            console.log('errors', errors.response?.data)
        }
    }
}
export const updateUserAction = (dataUser) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: 'http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
                method: 'POST',
                data: dataUser,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(ACCESSTOKEN)}`
                }
            })
            alert("Cập nhật thành công!")
            window.location.reload();
        }
        catch (errors) {
            console.log(errors.response?.data)
            alert(errors.response?.data.content)
        }
    }
}
export const deleteUserAction = (taiKhoan) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(ACCESSTOKEN)}`
                }
            })
            alert('Xóa tài khoản thành công!')
            dispatch(getApiUserAction())
        }
        catch (errors) {
            console.log(errors.response?.data)
            alert(errors.response.data.content)
        }
    }
}
export const searchUserAction = (tuKhoa) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP00&tuKhoa=${tuKhoa}`,
                method: 'GET',
            })
            const action = {
                type: GET_API_USER,
                danhSachNguoiDung: result.data.content
            }
            dispatch(action)
        }
        catch (errors) {
            console.log(errors.response?.data)
            alert(errors.response.data.content)
        }
    }
}