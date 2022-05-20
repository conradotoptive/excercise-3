import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
    },
    reducers: {
        setProductList: (state, action) =>{
            state.list = action.payload;
        }
    }
});

export const { setProductList } = productsSlice.actions;
export default productsSlice.reducer;