import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  cartIsVisible: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {},
});

export const uiActions = uiSlice.actions;

export default uiSlice;
