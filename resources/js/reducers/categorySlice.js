import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: "category",
    initialState: {
        data: null,
    },
    reducers: {
        GET_CATEGORY: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const categoryAction = categorySlice.actions;
export default categorySlice.reducer;
