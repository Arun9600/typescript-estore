import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { limitResultsSliceInitialState } from "../App.types";
import { BASE_URL } from "../utils";

const initialState: limitResultsSliceInitialState = {
  datas: [],
};

const limitResultsSlice = createSlice({
  name: "limitResults",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(limitResultsApiFunc.fulfilled, (state, action) => {
      state.datas = action.payload;
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
