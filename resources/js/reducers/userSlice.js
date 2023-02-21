import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: {
        data: null,
        permissions: {}
    },
    reducers: {
        SET_USER: (state, action) => {
            state.data = action.payload.user;
            state.permissions = action.payload.user.permissions;
        },
        LOG_OUT: (state, action) => {
            localStorage.removeItem('TOKEN');
            state.data = null;
        },
        SET_PERMISSIONS: (state, action) => {
            state.permissions = action.payload;
        }
    }
})

export const { SET_USER, LOG_OUT, SET_PERMISSIONS } = userSlice.actions;

export default userSlice.reducer;