import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        expireSoonProducts: [],
    },
    reducers: {
        SET_EXPIRE_SOON_PRODUCTS: (state, action) => {
            state.expireSoonProducts = action.payload;
        },
    },
});

export const { SET_EXPIRE_SOON_PRODUCTS } = productSlice.actions;
export default productSlice.reducer;
