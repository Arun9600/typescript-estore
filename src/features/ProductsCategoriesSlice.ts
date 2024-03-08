import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productsCatergoriesSliceInitialState } from "../App.types";
import { BASE_URL } from "../utils";

const initialState: productsCatergoriesSliceInitialState = {
  datas: [],
};

const ProductsCatergoriesSlice = createSlice({
  name: "prodcutsCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(prodcutsCategoriesFunc.fulfilled, (state, action) => {
      state.datas = action.payload;
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
