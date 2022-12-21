import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let initialState = {
    allProducts: [],
    currentProduct: {}
}


const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        fetchProducts: (state, action) => {
            // console.log("action",action)
            state.allProducts = action.payload
        },
        currentProduct: (state, action) => {
            state.currentProduct = action.payload
        }
    },
})

export const { fetchProducts,currentProduct } = productSlice.actions
export default productSlice.reducer