import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        leftDrawerOpened: false,
    },
    reducers: {
        toggleLeftDrawer: (state, action) => {
            state.leftDrawerOpened = action.payload
        }
    }
})

export const { toggleLeftDrawer } = themeSlice.actions;
export default themeSlice.reducer;