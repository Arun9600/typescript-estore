import { configureStore } from "@reduxjs/toolkit";
import ProductsListSlice from "./ProductsListSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    productsList: ProductsListSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
