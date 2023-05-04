import axios from "../utils/axios";
import { message } from "antd";
export const refreshToken = async () => {
  const response = await axios.post("/auth/refresh");

  localStorage.setItem("accessToken", response.data.accessToken);
};
export const register = async (body) => {
  try {
    const response = await axios.post("/auth/register", body);
    message.success(response.data.message);
  } catch (err) {
    message.error(err.response.data.message);
  }
};
