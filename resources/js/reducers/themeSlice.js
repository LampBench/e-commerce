import { createSlice } from '@reduxjs/toolkit';
import config from '../config';
export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        isOpen: [],
        fontFamily: config.fontFamily,
        borderRadius: config.borderRadius,
        opened: true
    },
    reducers: {
        SET_MENU: (state, action) => {
            state.opened = action.payload
        },
        SET_OPEN: (state, action) => {
            state.isOpen = [action.payload]
        },
        SET_FONT: (state, action) => {
            state.fontFamily = action.payload
        },
        SET_RADIUS: (state, action) => {
            state.borderRadius = action.payload
        }
    }
})

export const { SET_MENU, SET_OPEN, SET_FONT, SET_RADIUS } = themeSlice.actions;
export default themeSlice.reducer;