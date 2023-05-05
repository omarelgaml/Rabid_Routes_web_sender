import { createSlice } from "@reduxjs/toolkit";
import { getParcelsThunk, createParcelThunk } from "../thunks/ParcelsThunk";
import { message } from "antd";

const initialState = {
  parcels: null,
  loading: false,
};

export const userSlice = createSlice({
  name: "parcels",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getParcelsThunk.fulfilled, (state, action) => {
      state.loading = false;

      state.parcels = action.payload.parcels;
    });

    builder.addCase(getParcelsThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getParcelsThunk.rejected, (state, action) => {
      state.loading = false;
      message.error(action.payload);
    });
    /*************** */

    builder.addCase(createParcelThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createParcelThunk.rejected, (state, action) => {
      state.loading = false;
      message.error(action.payload);
    });
  },
});
export default userSlice.reducer;
