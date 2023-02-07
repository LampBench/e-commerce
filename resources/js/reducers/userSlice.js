import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: {
        data: null
    },
    reducers: {
        SET_USER: (state, action) => {
            state.data = action.payload.user;
        },
        LOG_OUT: (state, action) => {
            localStorage.removeItem('TOKEN');
            state.data = null;
        }
    }
})

export const { SET_USER, LOG_OUT } = userSlice.actions;

export default userSlice.reducer;