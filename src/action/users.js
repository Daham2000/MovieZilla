import * as api from "../api/index";
import { SIGNUP, LOGIN, FETCH_ALL, LIKE,UNLIKE, IFLIKED } from "../constants/actionType";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserStore from "../stores/UserStore";

toast.configure();

const notify = (data) => {
  if (data.isRegistered === true) {
    toast.success(data.message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  if (data.isRegistered === false) {
    toast.error(data.message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else {
    toast.info(data.isRegistered, { position: toast.POSITION.BOTTOM_RIGHT });
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

export const login = (user) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(user);
    if (data.isRegistered === true) {
      UserStore.isLoggedin = true;
      UserStore.email = user.email;
      const userData = JSON.parse(data.data);
      UserStore.userName = userData.name;
    } else {
      UserStore.isLoggedin = false;
      UserStore.email = "";
      UserStore.userName = "";
    }
    notify(data);
    dispatch({ type: LOGIN, payload: data });
  } catch (error) {
    console.log(error.massage);
  }
};

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchposts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.massage);
  }
};

export const isAlreadyLike = (id,email) =>async(dispatch) =>{
  try {
    const {data} = await api.isAlreadyExit(id,email);
    dispatch({ type: IFLIKED, payload: data });
  } catch (error) {
    console.log(error);
  }
}

export const likePost = (id,email) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id,email);
    dispatch({ type: LIKE, payload: data.updatedPost});
  } catch (error) {
    console.log(error);
  }
};

export const unlikePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.unlikePost(id);
    dispatch({ type: UNLIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};