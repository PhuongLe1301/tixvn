import {SET_HE_THONG_RAP_CHIEU, SET_THONG_TIN_HE_THONG_RAP} from '../action/types/TheaterType';

const stateDefault = {
    heThongRapChieu: [],
    // heThongRap: []
}

export const TheaterReducer = (state= stateDefault, action) => {
    switch (action.type) {
        case SET_HE_THONG_RAP_CHIEU:{
            state.heThongRapChieu = action.heThongRapChieu;
            return {...state};
        }
        // case SET_THONG_TIN_HE_THONG_RAP:{
        //     state.heThongRap = action.heThongRap;
        //     return {...state};
        // }

        default: return state;
    }
}