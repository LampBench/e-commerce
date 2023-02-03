import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: {
        data: {
            id: 1,
            name: "John Doe",
            email: "johndoe123@email.com",
            role: "admin"
        }
    },
    reducers: {
        saveUser: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { saveUser } = userSlice.actions;

export default userSlice.reducer;