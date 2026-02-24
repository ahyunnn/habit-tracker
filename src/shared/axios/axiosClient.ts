// src/api/axiosAuthClient.ts
import axios from "axios";

const axiosAuthClient = axios.create({
  baseURL: "http://localhost:5001", // 너 백엔드 주소
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
  withCredentials: true
});

// 👉 요청 인터셉터 (지금은 토큰 없음)
axiosAuthClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// 👉 응답 인터셉터 (에러 공통 처리용)
axiosAuthClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // 나중에 여기서 에러 메시지 정리해도 좋음
    return Promise.reject(error);
  }
);

export default axiosAuthClient;
