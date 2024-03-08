import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils";
import { productsSliceInitialState } from "../App.types";

const initialState: productsSliceInitialState = {
  datas: [],
};

const ProductsListSlice = createSlice({
  name: "productsList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsDataInList.fulfilled, (state, action) => {
      state.datas = action.payload;
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
