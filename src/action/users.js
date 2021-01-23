import * as api from "../api/index";
import { SIGNUP } from "../constants/actionType";

export const signup = (user) => async(dispatch) =>{
    try {
        const {data} = await api.registerUser(user);
        dispatch ({type: SIGNUP, payload: data});
    } catch (error) {
        console.log(error.massage);
    }
}