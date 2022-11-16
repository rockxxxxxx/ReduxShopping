import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cartItem: [],
};

const cartSlice = createSlice({
  name: "cartToggler",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isCartOpen = state.isCartOpen === true ? false : true;
    },
    addToCart: (state, action) => {
      state.cartItem = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const { toggleCart } = cartSlice.actions;
