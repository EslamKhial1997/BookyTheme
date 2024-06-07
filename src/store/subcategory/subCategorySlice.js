
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


let initialState = {
  isLoading: false,
  data: [],
  itemsCount: 0,
  pages: 0,
  error: null,
};

export const getSubcategory = createAsyncThunk(
  "subCategory/getSubcategory", 
  async (args, thunkApi) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3006/api/v1/category/${args}/subcategory`
      );
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);




const subcategorySlice = createSlice({
  name: "subcategory",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSubcategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getSubcategory.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload.data;

        state.error = null;
      })
      .addCase(getSubcategory.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      })
  },
});

export default subcategorySlice.reducer;
