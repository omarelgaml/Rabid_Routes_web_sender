import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk } from "../thunks/UserThunks";
// import { useHistory } from "react-router-dom";
const initialState = {
  user: {},
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      console.log(action.payload);
      window.location.href = "/";
    });

    builder.addCase(loginThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logoutThunk.fulfilled, (state) => {
      state.user = {};
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    });
  },
});
export default userSlice.reducer;
