import axios from 'axios';
import { FORM_DATA_REQUIRED_URLS, HEADER_NOT_REQUIRED_TOKEN_URLS } from 'api/urls';

const baseURL = process.env.REACT_APP_BASE_URL;

const request = axios.create({
  headers: {
    timeout: 1800000,
    'Content-Type': 'application/json',
  },
  baseURL,
});

// 요청 인터셉터
axios.interceptors.request.use(
  (config) => {
    // 요청이 전달되기 전에 작업 수행
    const token = ''; // 수정 예정, 토큰 받는 api
    config.headers.set(
      'Authorization',
      !HEADER_NOT_REQUIRED_TOKEN_URLS.includes(config.URL || '') ? (token ? `Bearer ${token}` : undefined) : undefined,
    );
    config.headers.set(
      'Content-Type',
      FORM_DATA_REQUIRED_URLS.includes(config.URL || '') ? 'multipart/form-data' : 'application/json',
    );
    return config;
  },
  (error) => {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);

// 응답 인터셉터
request.interceptors.response
  .use
  // (response) => {
  //   // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
  //   // 응답 데이터가 있는 작업 수행
  //   return response;
  // },
  // (error) => {
  //   // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
  //   // 응답 오류가 있는 작업 수행
  //   Promise.reject(error);
  // },
  ();

export const apiRequest = {
  get: (url, params) => request.get(url, { ...params }),
  post: (url, data) => request.post(url, data),
  postFormData: (url, formData) => request.post(url, formData),
  patchFormData: (url, formData) => request.patch(url, formData),
  patch: (url, data) => request.patch(url, data),
  putFormData: (url, formData) => request.put(url, formData),
  put: (url, data) => request.put(url, data),
  delete: (url, data) => request.delete(url, data),
};
