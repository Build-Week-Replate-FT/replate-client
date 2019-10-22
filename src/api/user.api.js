import { axiosWithAuth } from "../utils";

import { baseURL } from "./config.api";

const register = async user => {
  console.log(user);
  return await axiosWithAuth(baseURL).post("api/users", user);
};

function getUser() {
  JSON.parse(localStorage.getItem("user"));
}

export { register, getUser };
