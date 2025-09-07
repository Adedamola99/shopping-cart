// features/wishlistSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WishlistItem {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
}

interface WishlistState {
  items: WishlistItem[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const exists = state.items.find((i) => i.id === action.payload.id);
      if (!exists) state.items.push(action.payload);
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

export const selectWishlistItems = (state: any): WishlistItem[] =>
  state?.wishlist?.items ?? [];

export const selectIsInWishlist = (state: any, id: number) =>
  (state?.wishlist?.items ?? []).some((i: WishlistItem) => i.id === id);

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
