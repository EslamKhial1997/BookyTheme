import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/utils/axios";

let initialState = {
  isLoading: false,
  data: [],
  itemsCount: 0,
  pages: 0,
  error: null,
};

export const getheader = createAsyncThunk(
  "header/getHeader",
  async (args, thunkApi) => {
    try {
      const { data } = await axios.get(
        `https://bookyin.onrender.com/api/v1/header/${args}`
      );
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);




const headerSlice = createSlice({
  name: "header",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getheader.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getheader.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload.data;

        state.error = null;
      })
      .addCase(getheader.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      })
  },
});

export default headerSlice.reducer;
