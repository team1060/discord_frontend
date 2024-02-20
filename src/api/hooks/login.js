// login.js

import { apiRequest } from '../../api/request';
import { API_URL } from '../../api/urls';

// 로그아웃 시 호출되는 함수
export const handleLogout = () => {
  // 액세스 토큰을 로컬 스토리지에서 제거
  localStorage.removeItem('accessToken');
};

// 로그인 API 호출하는 함수
export const login = async (email, password) => {
  try {
    const response = await apiRequest.post(API_URL.LOGIN, { email, password });
    const { accessToken } = response.data;

    // 로그인 성공 시 액세스 토큰을 로컬 스토리지에 저장
    localStorage.setItem('accessToken', accessToken);
    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
