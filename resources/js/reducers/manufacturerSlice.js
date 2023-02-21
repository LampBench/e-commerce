import { createSlice } from "@reduxjs/toolkit";

export const manufacturerSlice = createSlice({
    name: "manufacturer",
    initialState: {
        manufacturers: [],
    },
    reducers: {
        SET_MANUFACTURER: (state, action) => {
            state.manufacturers = action.payload;
        },
    },
});

export const { SET_MANUFACTURER } = manufacturerSlice.actions;
export default manufacturerSlice.reducer;
