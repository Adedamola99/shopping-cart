// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/carts/cartSlice";
import productReducer from "../features/products/productSlice";
import wishlistReducer from "../features/wish/wishlistSlice";

function loadFromLocalStorage(key: string) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return undefined;
    const parsed = JSON.parse(raw);
    if (!parsed) return undefined;
    return parsed;
  } catch {
    return undefined;
  }
}

const preloadedState: any = {
  cart: { items: loadFromLocalStorage("cartState") ?? [] },
  wishlist: { items: loadFromLocalStorage("wishlistState") ?? [] },
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    wishlist: wishlistReducer,
  },
  preloadedState,
});

function saveToLocalStorage(key: string, value: any) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error("Failed to save to localStorage:", err);
  }
}

store.subscribe(() => {
  try {
    const state = store.getState();
    saveToLocalStorage("cartState", state?.cart?.items ?? []);
    saveToLocalStorage("wishlistState", state?.wishlist?.items ?? []);
  } catch (err) {
    console.error("Failed to persist state:", err);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
