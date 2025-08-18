// features/carts/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  description: string;
  quantity: number;
  img: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item && action.payload.quantity > 0) {
        item.quantity = action.payload.quantity;
      } else if (item && action.payload.quantity <= 0) {
        state.items = state.items.filter((i) => i.id !== action.payload.id);
      }
    },
  },
});

export const selectTotalItems = (state: any) =>
  (state?.cart?.items ?? []).reduce(
    (total: number, item: CartItem) => total + item.quantity,
    0
  );

export const selectCartTotal = (state: any) =>
  (state?.cart?.items ?? []).reduce(
    (total: number, item: CartItem) => total + item.price * item.quantity,
    0
  );

export const selectCartItem = (state: any): CartItem[] =>
  state?.cart?.items ?? [];

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
export type { CartItem };
