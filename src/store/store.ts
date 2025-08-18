// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/carts/cartSlice";
import productReducer from "../features/products/productSlice";

function loadCartFromLocalStorage() {
  try {
    const raw = localStorage.getItem("cartState");
    if (!raw) return undefined;
    const items = JSON.parse(raw);
    // Basic validation: ensure array
    if (Array.isArray(items)) return { cart: { items } };
    return undefined;
  } catch {
    return undefined;
  }
}

const preloadedState = loadCartFromLocalStorage();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
  preloadedState,
});

// Persist cart items only (safe check)
store.subscribe(() => {
  try {
    const state = store.getState();
    const items = state?.cart?.items ?? [];
    localStorage.setItem("cartState", JSON.stringify(items));
  } catch (error) {
    console.error("Failed to save cart to localStorage:", error);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
