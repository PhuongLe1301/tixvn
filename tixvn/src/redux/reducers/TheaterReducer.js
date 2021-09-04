import {SET_HE_THONG_RAP_CHIEU} from '../action/types/TheaterType';

const stateDefault = {
    heThongRapChieu: []
}

export const TheaterReducer = (state= stateDefault, action) => {
    switch (action.type) {
        case SET_HE_THONG_RAP_CHIEU:{
            state.heThongRapChieu = action.heThongRapChieu;
            return {...state};
        }

        default: return state;
    }
}