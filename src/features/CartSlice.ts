import { createSlice } from "@reduxjs/toolkit";
import { cartSliceInitialState } from "../App.types";
import { CartData } from "../App.types";

const initialState: cartSliceInitialState = {
  datas: [],
  loading: true,
  error: "",
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const cart = state.datas?.find(
        (item: CartData) => item.id === action.payload.id
      ) as CartData | undefined;
      if (cart) {
        cart.qty = (cart.qty || 0) + 1;
        state.loading = false;
      } else {
        (state.datas as CartData[] | undefined)?.push({
          ...action.payload,
          qty: 1,
        } as CartData);
        state.loading = false;
      }
    },
    deleteItem: (state, action) => {
      (state.datas as CartData[] | undefined) = state.datas?.filter(
        (item: CartData) => item.id !== action.payload.id
      );
    },
    addQty: (state, action) => {
      const increaseQty = state.datas?.find(
        (item: CartData) => item.id === action.payload.id
      ) as CartData | undefined;
      if (increaseQty) {
        increaseQty.qty = (increaseQty.qty || 0) + 1;
      }
    },
    decreaseQty: (state, action) => {
      const dQty = state.datas?.find(
        (item: CartData) => item.id === action.payload.id
      ) as CartData | undefined;
      if (dQty && (dQty.qty || 0) > 1) {
        dQty.qty = (dQty.qty || 0) - 1;
      }
    },
  },
});

export const { add, deleteItem, addQty, decreaseQty } = CartSlice.actions;
export default CartSlice.reducer;
