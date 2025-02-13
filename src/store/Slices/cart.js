import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const isPresent = state.cart.some((product) => product.id === action.payload.id);
        if (isPresent) {
          state.cart = state.cart.map((product) => product.id === action.payload.id ? {...product, quantity: product.quantity + 1} : product);
        } else {
            state.cart = [...state.cart, { ...action.payload, quantity: 1}];
        }
      },
    removeFromcart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
    },
    decreaseQuantity: (state, action) => {
      const product = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromcart, decreaseQuantity, clearCart } =
  cartReducer.actions;

export default cartReducer.reducer;