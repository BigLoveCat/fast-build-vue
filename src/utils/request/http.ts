// http.ts
// http.ts
import { request } from "./index";
import type { AxiosRequestConfig } from "axios";

const http = {
  get<T>(url: string, config?: AxiosRequestConfig) {
    return request<T>({ url, method: "get", ...config });
  },
  post<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return request<T>({ url, method: "post", data, ...config });
  },
  put<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return request<T>({ url, method: "put", data, ...config });
  },
  patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return request<T>({ url, method: "patch", data, ...config });
  },
  delete<T>(url: string, config?: AxiosRequestConfig) {
    return request<T>({ url, method: "delete", ...config });
  },
  request<T>(config: AxiosRequestConfig) {
    // 支持自定义 method
    return request<T>(config);
  },
};

export default http;
