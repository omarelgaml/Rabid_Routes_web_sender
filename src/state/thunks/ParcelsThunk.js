import { createAsyncThunk } from "@reduxjs/toolkit";
import { createParcel, getsParcels } from "../../network/api/parcels";

export const createParcelThunk = createAsyncThunk(
  "parcels/createParcelThunk",
  async (body, { rejectWithValue }) => {
    try {
      const res = await createParcel(body);

      return res;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const getParcelsThunk = createAsyncThunk(
  "parcels/getParcelsThunk",
  async (body, { rejectWithValue }) => {
    try {
      const res = await getsParcels();

      return res;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
