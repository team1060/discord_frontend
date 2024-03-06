// logout.js

import { apiRequest } from 'api/request';
import { API_URL } from 'api/urls';

// 로그아웃 시 호출되는 함수
export const handleLogout = async () => {
  const email = localStorage.getItem('email');
  localStorage.removeItem('accessToken');
  try {
    const response = await apiRequest.post(API_URL.LOGOUT, { email });
    console.log(response);

    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 액세스 토큰 만료 시간을 가져오는 함수
export const getAccessTokenExpirationTime = () => {
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) return null;

  try {
    const tokenData = JSON.parse(atob(accessToken.split('.')[1])); // 액세스 토큰 디코딩
    return tokenData.exp * 1000; // 만료 시간(밀리초) 반환
  } catch (error) {
    console.error('Failed to decode access token:', error);
    return null;
  }
};

// 자동 로그아웃 타이머 설정 함수
export const setupAutoLogout = () => {
  const expirationTime = getAccessTokenExpirationTime();
  if (!expirationTime) return;

  const now = Date.now();
  const timeUntilExpiration = expirationTime - now;

  if (timeUntilExpiration <= 0) {
    handleLogout(); // 만료된 경우 바로 로그아웃
  } else {
    setTimeout(handleLogout, timeUntilExpiration);
    // 만료 시간까지 타이머 설정
  }
};
