import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import productslice from './productslice'
export const store = configureStore({
  reducer: {
    allProducts:productslice,
    cart:cartSlice
  },
})