// index.ts
import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';
import type { ApiResponse } from './types';
import { handleHttpError } from './error';
import { addPending, removePending } from './cancel';

// 1. 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: Number(import.meta.env.VITE_API_TIMEOUT)
});

// 2. 请求拦截器
service.interceptors.request.use(config => {
  addPending(config);
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// 3. 响应拦截器（只处理网络层）
service.interceptors.response.use(
  response => {
    removePending(response.config);
    return response;
  },
  error => {
    handleHttpError(error);
    return Promise.reject(error);
  }
);

// 4. request<T> 函数，核心业务类型推导
export function request<T = unknown>(config: AxiosRequestConfig): Promise<T> {
  return service(config).then((res: AxiosResponse<ApiResponse<T>>) => {
    const data = res.data;
    // console.log('响应数据：', data);
    if (data.code !== 0) {
      return Promise.reject(data.message);
    }
    return data.data;
  });
}

export default service;
