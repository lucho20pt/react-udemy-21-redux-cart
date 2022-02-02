import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    totalPrice: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart() {},
    removeFromCart() {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
