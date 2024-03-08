import { configureStore } from "@reduxjs/toolkit";
import ProductsListSlice from "./ProductsListSlice";
import ProductsCategoriesSlice from "./ProductsCategoriesSlice";
import ProductsLimitSlice from "./ProductsLimitSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    productsList: ProductsListSlice,
    prodcutsCategories: ProductsCategoriesSlice,
    limitResults: ProductsLimitSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
