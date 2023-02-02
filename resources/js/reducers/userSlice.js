import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: {
        data: null
    },
    reducers: {
        saveUser: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { saveUser } = userSlice.actions;

export default userSlice.reducer;