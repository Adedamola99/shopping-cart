import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/carts/cartSlice";
import productReducer from "../features/products/productSlice";
import { loadCartState, saveToLocalStorage } from "../utils/localStorageUtils";

const preloadedState = {
  cart: loadCartState(),
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveToLocalStorage(store.getState().cart);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
