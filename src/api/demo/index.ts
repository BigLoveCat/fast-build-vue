import http from '@/utils/request/http';

import type { UserInfo } from './types';

const getUserInfo = () => {
  return http.get<UserInfo>('/user/info');
};

export { getUserInfo };
