import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { loadCartState } from "../../utils/localStorageUtils";

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

// Ensure `loadCartState()` returns an array, defaulting to an empty array if it’s undefined
const initialState: CartState = {
  items: loadCartState() || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      if (!state.items) state.items = [];

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
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

// Selector to get total items count, with a fallback to an empty array
export const selectTotalItems = (state: RootState) =>
  (state.cart.items || []).reduce((total, item) => total + item.quantity, 0);

// Selector to get the total cost, with a fallback to an empty array
export const selectCartTotal = (state: RootState) =>
  (state.cart.items || []).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

export const selectCartItem = (state: RootState) => state.cart?.items || [];

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
