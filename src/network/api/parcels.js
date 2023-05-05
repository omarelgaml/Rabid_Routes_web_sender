import axios from "../utils/axios";

export const createParcel = async (body) => {
  const response = await axios.post("/parcels", body);
  console.log(response);
  return response.data;
};
export const getsParcels = async (body) => {
  const response = await axios.get("/parcels/sender", body);
  console.log(response);
  return response.data;
};
