import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            let index = state.cart.findIndex((e, i) => e.id == action.payload.id)
            if (index == -1) {
                state.cart.push(action.payload)
            } else {
                alert("invalid action")
            }
        },
        removeItemToCart: (state, action) => {
            let index = state.cart.findIndex((e, i) => e.id == action.payload)
            if (index == -1) {
                alert("invalid action")
            } else {
                let new_state = state.cart;
                new_state.splice(index, 1)
                state.cart.push(action.payload)
            }
        }
    }
})
export const { addItemToCart, removeItemToCart } = cartSlice.actions
export default cartSlice.reducer
