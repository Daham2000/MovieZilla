import * as api from "../api/index";
import { SIGNUP,LOGIN } from "../constants/actionType";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const notify = (data) => {
    if (data.isRegistered===true) {
        toast.success( data.message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    if (data.isRegistered===false){
        toast.error(data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }else{
        toast.info(data.isRegistered, {position: toast.POSITION.TOP_CENTER});
    }
};

export const signup = (user) => async (dispatch) => {
  try {
    const { data } = await api.registerUser(user);
    notify(data);
    dispatch({ type: SIGNUP, payload: data });
  } catch (error) {
    console.log(error.massage);
  }
};

export const login = (user) => async (dispatch) =>{
  try {
    const {data} = await api.loginUser(user);
    notify(data);
    dispatch({type: LOGIN, payload: data});
  } catch (error) {
    console.log(error.massage);
  }
};
