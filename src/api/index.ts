import type { AxiosInstance, AxiosResponse } from "axios";
import axios from "axios";
import { handleResponseError } from "@/utils/error";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

const axiosConfig = {
  baseURL,
  timeout: 30000,
};
const service: AxiosInstance = axios.create(axiosConfig as any);

service.interceptors.request.use(
  (config) => {
    /* 接口发送请求拦截器逻辑 */
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    /* 接口响应请求拦截器逻辑 */
    return handleResponseError(response);
  },
  (error) => {
    const { message } = error;
    return Promise.reject(message);
  }
);

export default service;
