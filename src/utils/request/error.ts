import axios from "axios";

export function handleHttpError(error: unknown) {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;

    switch (status) {
      case 401:
        console.error("未授权，请重新登录");
        break;
      case 403:
        console.error("拒绝访问");
        break;
      case 404:
        console.error("请求地址错误");
        break;
      case 500:
        console.error("服务器异常");
        break;
      default:
        console.error("网络错误");
    }
  } else {
    console.error("未知错误");
  }
}
