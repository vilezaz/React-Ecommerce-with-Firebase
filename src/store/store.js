import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./Slices/products";

export const store = configureStore({
  reducer: {
    products: productReducer
  },
})