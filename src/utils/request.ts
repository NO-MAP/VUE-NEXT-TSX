import axios, { AxiosRequestConfig } from "axios";
import NProgress from "nprogress";
import { getToken } from "./auth";
import { message } from "ant-design-vue";
import router from "../router";

const _request = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 50000,
});

_request.interceptors.request.use((config) => {
  NProgress.start();
  const url = config.url;
  if (getToken() && url?.indexOf("refreshToken") === -1) {
    config.headers["Authorization"] = `Bearer ${getToken()}`;
  }
  return config;
});

_request.interceptors.response.use(
  (response) => {
    if (response.status !== 200 && response.status !== 201) {
      message.error(response.data.message || "Error");
      NProgress.done();
      return Promise.reject(new Error(response.data || "Error"));
    } else {
      NProgress.done();
      return response;
    }
  },
  (error) => {
    NProgress.done();
    let code, msg;
    if (error.response) {
      console.log(error.response.data);
      const errResponse = error.response.data;
      code = errResponse.statusCode;
      msg = errResponse.message;
    } else {
      code = 500;
      msg = "服务错误";
    }
    if (code === 401) {
      // 鉴权失败
      // store.commit("user/CLEAR_USERINFO");
      message.warn("登录状态失效，请重新登录");
      router.replace({
        name: "Login",
      });
    } else {
      message.error(code + " | " + msg);
      return Promise.reject(error);
    }
  }
);

const request = async <T>(config: AxiosRequestConfig): Promise<T> => {
  const data = await _request(config);
  return {
    ...data.data,
  } as T;
};

export default request;
