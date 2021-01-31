import axios from "axios";

const url = "http://localhost:5000/users";

export const registerUser = (newUser) => axios.post(`${url}/createAccount`, newUser);
export const loginUser = (user) => axios.post(`${url}/login`, user);
export const fetchposts = () => axios.get(`${url}/getPosts`);
export const likePost = (id,email) => axios.patch(`${url}/${id}/${email}/likePost`);
export const unlikePost = (id) => axios.patch(`${url}/${id}/unlikePost`);
export const isAlreadyExit = (id,email) => axios.get(`${url}/${id}/${email}/ifAlreadyLiked`);
export const getMovies = () => axios.get(`${url}/getMovies`);
export const getTvSeries = () => axios.get(`${url}/getTvSeries`);
