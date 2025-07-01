import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/carts/cartSlice";
import productReducer from "../features/products/productSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

// Optional: Add localStorage persistence
store.subscribe(() => {
  const state = store.getState();
  try {
    localStorage.setItem("cartState", JSON.stringify(state.cart.items));
  } catch (error) {
    console.error("Failed to save cart to localStorage:", error);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
