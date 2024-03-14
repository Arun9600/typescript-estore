import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { productsCatergoriesSliceInitialState } from "../App.types";
import { BASE_URL } from "../utils";

const initialState: productsCatergoriesSliceInitialState = {
  datas: [],
  loading: true,
  error: "",
};

const ProductsCatergoriesSlice = createSlice({
  name: "prodcutsCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(prodcutsCategoriesFunc.fulfilled, (state, action) => {
      state.datas = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(prodcutsCategoriesFunc.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(prodcutsCategoriesFunc.rejected, (state) => {
      state.error = "Error in fecthing details";
      state.loading = false;
    });
  },
});

export const prodcutsCategoriesFunc = createAsyncThunk(
  "prodcutsCategories",
  async () => {
    const apiURL = await fetch(`${BASE_URL}/products/categories`);
    const response = await apiURL.json();
    return response;
  }
);

export default ProductsCatergoriesSlice.reducer;
