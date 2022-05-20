import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        user: {},
    },
    reducers: {
        logUserIn: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logUserOut: (state) => {
            state = initialState;
        }
    }
});

export const { logUserIn, logUserOut } = userSlice.actions;
export default userSlice.reducer;