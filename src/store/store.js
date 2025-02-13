import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slices/products";
import cartReducer from "./Slices/cart";
import favouriteReducer from "./Slices/favourite";
import authReducer from "./Slices/auth"

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    favourite: favouriteReducer,
    auth: authReducer
  }
});