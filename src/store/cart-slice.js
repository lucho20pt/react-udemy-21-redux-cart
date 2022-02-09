import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalCartQuantity: 0,
  totalCartPrice: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    //
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalCartQuantity = action.payload.totalCartQuantity;
      state.totalCartPrice = action.payload.totalCartPrice;
    },
    //
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalCartQuantity++;
      state.changed = true;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalItemPrice: newItem.price,
        });
        state.totalCartPrice += newItem.price;
      } else {
        existingItem.quantity++;
        existingItem.totalItemPrice += existingItem.price;
        state.totalCartPrice += existingItem.price;
      }
    },
    //
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      state.totalCartQuantity--;
      state.totalCartPrice -= existingItem.price;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalItemPrice -= existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
