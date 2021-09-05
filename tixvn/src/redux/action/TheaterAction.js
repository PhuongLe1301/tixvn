import {manageTheaterService} from "../../components/services/ManageTheaterService";
import {SET_HE_THONG_RAP_CHIEU, SET_THONG_TIN_HE_THONG_RAP} from "./types/TheaterType";

export const getListTheaterSystemAction = () =>{
    return async (dispatch) => {
        try {
            const result = await manageTheaterService.getListTheaterSystem();
            if(result.status === 200){
                dispatch({
                    type: SET_HE_THONG_RAP_CHIEU,
                    heThongRapChieu: result.data.content
                }) 
            }

        }catch(errors){
            console.log('errors', errors);
        }
    }
}
