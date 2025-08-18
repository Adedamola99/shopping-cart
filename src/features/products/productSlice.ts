// features/products/productSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// removed: import { RootState } from "../../store/store";

export interface Products {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const fetchProducts = createAsyncThunk<Products[], void>(
  "products/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data.map((item: any) => ({
      id: item.id,
      name: item.title,
      price: item.price,
      image: item.image,
      category: item.category,
      description: item.description,
    }));
  }
);

interface ProductState {
  products: Products[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Products[]>) => {
          state.loading = false;
          state.products = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

// Selectors: avoid importing RootState here to prevent circular import.
// Use `any` or declare local typed shape if you want more strictness.
export const selectAllProducts = (state: any): Products[] =>
  state.product.products;
export const selectProductLoading = (state: any): boolean =>
  state.product.loading;
export const selectProductError = (state: any): string | null =>
  state.product.error;

export default productSlice.reducer;
