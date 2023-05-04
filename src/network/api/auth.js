import axios from "../utils/axios";

export const refreshToken = async () => {
  const response = await axios.post("/auth/refresh", {
    refreshToken: localStorage.getItem("refreshToken"),
  });

  localStorage.setItem("accessToken", response.data.accessToken);
  localStorage.setItem("refreshToken", response.data.refreshToken);
};
