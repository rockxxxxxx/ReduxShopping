import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: "cartToggler",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isCartOpen = state.isCartOpen === true ? false : true;
    },
  },
});

export default cartSlice.reducer;
export const { toggleCart } = cartSlice.actions;
