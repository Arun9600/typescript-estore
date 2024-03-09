import { configureStore } from "@reduxjs/toolkit";
import ProductsListSlice from "./ProductsListSlice";
import ProductsCategoriesSlice from "./ProductsCategoriesSlice";
import ProductsLimitSlice from "./ProductsLimitSlice";
import ProductDetailsSlice from "./ProductsDetailsSlice";
import CartSlice from "./CartSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    productsList: ProductsListSlice,
    prodcutsCategories: ProductsCategoriesSlice,
    limitResults: ProductsLimitSlice,
    productDetails: ProductDetailsSlice,
    cart: CartSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
