import { configureStore } from '@reduxjs/toolkit';
import user from './slices/user';
import products from './slices/products';

export default configureStore({
    reducer: {
        user,
        products,
    },
})
