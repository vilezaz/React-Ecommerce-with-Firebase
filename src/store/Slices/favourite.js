import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourites: [],
};

const favouritesReducer = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
        const isPresent = state.favourites.some((recipe) => recipe.id === action.payload.id);
        if (!isPresent) {
          state.favourites.push(action.payload);
        }
      },
    removeFromFavourites: (state, action) => {
      state.favourites = state.favourites.filter(
        (recipe) => recipe.id !== action.payload.id
      );
    },
    clearFavourites: (state) => {
      state.favourites = [];
    },
  },
});

export const { addToFavourites, removeFromFavourites, clearFavourites } =
  favouritesReducer.actions;

export default favouritesReducer.reducer;