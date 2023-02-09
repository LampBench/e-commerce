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
            state.permissions = action.payload.permissions;
        },
        LOG_OUT: (state, action) => {
            localStorage.removeItem('TOKEN');
            state.data = null;
        }
    }
})

export const { SET_USER, LOG_OUT } = userSlice.actions;

export default userSlice.reducer;