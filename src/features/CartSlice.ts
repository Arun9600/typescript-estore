import { createSlice } from "@reduxjs/toolkit";
import { cartSliceInitialState } from "../App.types";
import { CartData } from "../App.types";

const initialState: cartSliceInitialState = {
  datas: [],
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
      } else {
        (state.datas as CartData[] | undefined)?.push({
          ...action.payload,
          qty: 1,
        } as CartData);
      }
    },
  },
});

export const { add } = CartSlice.actions;
export default CartSlice.reducer;
