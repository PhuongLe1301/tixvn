import { manageMovieService } from "../../components/services/MangageMovieService";
import {SET_CAROUSEL} from "./types/CarouselType";

export const getListCarouselAction = () => {
    return async (dispatch) => {
        try{

            const result = await manageMovieService.getListCarousel();

            dispatch({
                type: SET_CAROUSEL,
                arrCarousel: result.data.content
            })

        }catch(errors){
            console.log('errors', errors);
        }
    }
}