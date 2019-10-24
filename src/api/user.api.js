import { axiosWithAuth } from "../utils";
import qs from "qs";
import axios from "axios";

import { baseURL } from "./config.api";

const handleUserResponse = (token, userInfo) => {
  localStorage.setItem("user", JSON.stringify(userInfo.data));
  localStorage.setItem("token", token);
  return userInfo.data;
};

const getUserInfo = async userResponse => {
  const token = userResponse.data.access_token;
  return await axiosWithAuth(baseURL, token)
    .get(`users/mine`)
    .then(userInfo => handleUserResponse(token, userInfo));
};

const login = async credentials => {
  const loginQueryString = qs.stringify({
    grant_type: "password",
    username: credentials.email,
    password: credentials.password
  });
  return await axiosWithAuth(baseURL)
    .post("login", loginQueryString)
    .then(getUserInfo);
};

const register = async (user, userType) => {
  const { email, password } = user;
  return await axios
    .post(`${baseURL}createnewuser/${userType}`, user)
    .then(() => login({ email, password }));
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const getToken = () => {
  return localStorage.getItem("token");
};

export { register, login, logout, getUser, getToken };
