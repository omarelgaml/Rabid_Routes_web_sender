import axios from "../utils/axios";
import { message } from "antd";
export const createParcel = async (body) => {
  try {
    const response = await axios.post("/parcels", body);

    return response.data;
  } catch (err) {
    message.error(err.response.data.message);
  }
};
