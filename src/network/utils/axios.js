import axios from "axios";

const api = axios.create({
  baseURL: "https://api.example.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

async function refreshToken() {}
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

    // If the request has already been retried or the error is not related to token expiration, throw the error
    if (originalRequest._retry || error.response.status !== 401) {
      throw error;
    }

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
