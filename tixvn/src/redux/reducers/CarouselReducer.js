import { SET_CAROUSEL } from "../action/types/CarouselType"

const stateDefault = {
    arrCarousel: [{
        "maBanner": 1,
        "maPhim": 1282,
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png"
    }]
}

export const CarouselReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_CAROUSEL: {
            state.arrCarousel = action.arrCarousel;
            return {...state}
        }
        default: return { ...state }
    }
}