import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productsListDatas } from "../App.types";
import { BASE_URL } from "../utils";

const initialState: productsListDatas[] = [];

const ProductsListSlice = createSlice({
  name: "productsList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsDataInList.fulfilled, (state, action) => {
      state = action.payload;
    });
  },
});

export const getProductsDataInList = createAsyncThunk(
  "productsList",
  async () => {
    const apiURL = await fetch(`${BASE_URL}/products`);
    const response = await apiURL.json();
    return response;
  }
);

export default ProductsListSlice.reducer;
