export const API_URL = {
  REGISTER_GET: '/api/register',
  REGISTER_POST: '/api/register',
  REFRESH: '/api/refresh',
  LOGOUT: '/api/logout',
  LOGIN: '/api/login',
};

// 토큰 필요 없는 URL
export const HEADER_NOT_REQUIRED_TOKEN_URLS = [API_URL.LOGIN, API_URL.REGISTER_POST];

// Form data로 전송 필요한 URL
export const FORM_DATA_REQUIRED_URLS = [];
