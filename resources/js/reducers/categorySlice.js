import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: "category",
    initialState: {
        categories: [],
        chosenCategory: ""
    },
    reducers: {
        SET_CATEGORY: (state, action) => {
            state.categories = action.payload;
        },
        SET_CHOSEN_CATEGORY: (state, action) => {
            state.chosenCategory = action.payload;
        },
    },
});

export const { SET_CATEGORY, SET_CHOSEN_CATEGORY } = categorySlice.actions;
export default categorySlice.reducer;
