import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        list: [],
    },
    reducers: {
        setCartList: (state, action) =>{
            state.list = action.payload;
        },
    }
});

export const { setCartList } = cartSlice.actions;
export default cartSlice.reducer;