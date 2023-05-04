import axios from "axios";
import { refreshToken } from "../api/auth";
import { message } from "antd";

const api = axios.create({
  baseURL: "http://localhost:3000/api/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 500) {
      message.error("Oops, un error happened");

      return;
    }

    if (originalRequest._retry || error.response.status !== 401) throw error;

    originalRequest._retry = true;

    try {
      // Refresh the access token
      await refreshToken();

      // Retry the original request with the new access token
      const accessToken = localStorage.getItem("accessToken");
      originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
      return api(originalRequest);
    } catch (error) {
      // If the refresh token is also expired, redirect to the login page
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      window.location.href = "/login";
    }
  }
);
export default api;
