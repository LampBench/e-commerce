import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: "category",
    initialState: {
        categories: [],
    },
    reducers: {
        SET_CATEGORY: (state, action) => {
            state.categories = action.payload;
        },
    },
});

export const { SET_CATEGORY } = categorySlice.actions;
export default categorySlice.reducer;
