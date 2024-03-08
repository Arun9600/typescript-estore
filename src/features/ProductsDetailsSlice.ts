import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productsDetailsSliceInitialSlice } from "../App.types";
import { BASE_URL } from "../utils";

const initialState: productsDetailsSliceInitialSlice = {
  datas: {},
};

const ProductDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productDetailsFunc.fulfilled, (state, action) => {
      state.datas = action.payload;
    });
  },
});

export const productDetailsFunc = createAsyncThunk(
  "productDetails",
  async (productId: number) => {
    const apiURL = await fetch(`${BASE_URL}/products/${productId}`);
    const response = await apiURL.json();
    return response;
  }
);

export default ProductDetailsSlice.reducer;
