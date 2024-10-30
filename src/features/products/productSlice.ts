import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

export interface Products {
    id:number,
    name: string,
    price: number,
    image: string,
    category: string
    description: string,
} 


export const fetchProducts = createAsyncThunk<Products[], void>(
    'products/fetchProducts', 
    async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data.map((item: any) => ({
            id: item.id,
            name: item.title,
            price: item.price,
            image: item.image,
            category: item.category,
            description: item.description,
        }))
    }
)

interface ProductState  {
    products: Products[],
    loading: boolean,
    error: string | null
}

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null,
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null
        })
        .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Products[]>) => {
            state.loading = false;
            state.products = action.payload
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch products'
        })
    }
})

export const selectAllProducts = (state: RootState) => state.product.products;
export const selectProductLoading = (state: RootState) => state.product.loading;
export const selectProductError = (state: RootState) => state.product.error;

export default productSlice.reducer