import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, logout } from "../../network/api/auth";

export const logoutThunk = createAsyncThunk("user/logout", async () => {
  await logout();
});

// export const getCurrentUser = createAsyncThunk('user/getCurrentUser', async () => {
//   const response = await axios.get('/current-user');
//   return response.data;
// });

export const loginThunk = createAsyncThunk("user/login", async (body) => {
  const response = await login(body);
  return response.data;
});
