import axios from "axios";

const url = "https://moviezillaserver.herokuapp.com/users";

export const registerUser = (newUser) => axios.post(`${url}/createAccount`, newUser);
export const loginUser = (user) => axios.post(`${url}/login`, user);
