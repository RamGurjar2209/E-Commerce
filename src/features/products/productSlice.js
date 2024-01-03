import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";

const productSlice = createSlice({

    name: "products",
    initialState: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        products: [{
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
                "rate": 3.9,
                "count": 120
            }
        }]
    },

    reducers: {

    },

    extraReducers: builder => {

        builder
            .addCase(getProducts.pending, state =>{
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state , action)=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.products = action.payload
            })
            .addCase(getProducts.rejected , state =>{
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
            })

    }

})

export default productSlice.reducer



export const getProducts = createAsyncThunk("FETCH/PRODUCTS", async () => {

    try {
        return await productService.fetchProducts()
    } catch (error) {
        console.log(error);
    }

})