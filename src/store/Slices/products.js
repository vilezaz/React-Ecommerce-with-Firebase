import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (_, thunkAPI) => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      console.log(response.data.products);
    return response.data.products;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  } 
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, state => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
  },
});

export default productsSlice.reducer;