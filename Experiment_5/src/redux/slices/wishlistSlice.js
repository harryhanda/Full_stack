import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addPlace: (state, action) => {
      state.push(action.payload);
    },
    removePlace: (state, action) => {
      return state.filter((place) => place.name !== action.payload);
    },
    clearWishlist: () => {
      return [];
    },
  },
});

export const { addPlace, removePlace, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;