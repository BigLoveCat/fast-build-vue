// mock/user.ts
import type { MockMethod } from 'vite-plugin-mock';

interface UserInfo {
  id: number;
  name: string;
}

interface ApiResponse<T> {
  code: number;
  data: T;
  message: string;
}

export default [
  {
    url: '/api/user/info',
    method: 'get',
    response: (): ApiResponse<UserInfo> => {
      return {
        code: 0,
        data: {
          id: 1,
          name: '张三'
        },
        message: 'success'
      };
    }
  }
] as MockMethod[];
