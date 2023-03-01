import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        homeExpireSoonProducts: [],
        expireSoonProducts: [],
        recommendedProducts: [],
        carouselCategoryProducts: []
    },
    reducers: {
        SET_HOME_EXPIRE_SOON_PRODUCTS: (state, action) => {
            state.homeExpireSoonProducts = action.payload;
        },
        SET_EXPIRE_SOON_PRODUCTS: (state, action) => {
            state.expireSoonProducts = action.payload;
        },
        SET_RECOMMENDED_PRODUCTS: (state, action) => {
            state.recommendedProducts = action.payload;
        },
        SET_CAROUSEL_CATEGORY_PRODUCTS: (state, action) => {
            state.carouselCategoryProducts = action.payload;
        },
    },
});

export const {
    SET_HOME_EXPIRE_SOON_PRODUCTS,
    SET_EXPIRE_SOON_PRODUCTS,
    SET_RECOMMENDED_PRODUCTS,
    SET_CAROUSEL_CATEGORY_PRODUCTS } = productSlice.actions;
export default productSlice.reducer;
