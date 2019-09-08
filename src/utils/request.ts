import axios from "axios";
import { AxiosResponse } from "axios/index";
import { message } from "antd";
import { getToken } from "./index";

const instance = axios.create({
  baseURL: "http://localhost:7001",
  timeout: 1000,
  headers: { authorization: getToken() }
});
instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    if (response.status !== 200) {
      message.error(response.statusText);
    }
    return response.data;
  },
  error => {
    console.log("error...", error.response);
    if (error.response.status && error.response.status !== 200) {
      message.error(error.response.statusText);
    }
    return Promise.resolve(error);
  }
);

export default instance;
