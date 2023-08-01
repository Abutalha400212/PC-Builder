import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, { payload }) => {
      const exist = state.cart.find((el) => el._id === payload._id);
      if (exist) {
        alert("Already selected");
      }
      state.cart.push(payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCart } = cartSlice.actions;

export default cartSlice.reducer;
