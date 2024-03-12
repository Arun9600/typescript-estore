import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { limitResultsSliceInitialState } from "../App.types";
import { BASE_URL } from "../utils";

const initialState: limitResultsSliceInitialState = {
  datas: [],
  loading: true,
  error: "",
};

const limitResultsSlice = createSlice({
  name: "limitResults",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(limitResultsApiFunc.fulfilled, (state, action) => {
      state.datas = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(limitResultsApiFunc.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(limitResultsApiFunc.rejected, (state) => {
      state.loading = false;
      state.error = "Error in fetching data";
    });
  },
});

export const limitResultsApiFunc = createAsyncThunk(
  "limitResults",
  async () => {
    const apiURL = await fetch(`${BASE_URL}/products?limit=6`);
    const response = await apiURL.json();
    return response;
  }
);

export default limitResultsSlice.reducer;
