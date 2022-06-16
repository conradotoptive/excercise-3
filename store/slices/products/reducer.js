import { actionTypes } from './action';

export const initialState = {
    product: null,
    productList: [],
    currentPage: 0,
    totalPages: 0,
}

function reducer (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_PRODUCT_LIST: {
            let productList = action.payload;
            return {
                ...state,
                productList,
            };
        }
        case actionTypes.SET_PRODUCT:{
            let product = action.payload;
            return {
                ...state,
                product,
            };
        }
        case actionTypes.CLEAR_PRODUCT_LIST: {
            return {
                ...state,
                productList: [],
            };
        }
        case actionTypes.SET_CURRENT_PAGE: {
            let currentPage = action.payload;
            return {
                ...state,
                currentPage,
            }
        }
        case actionTypes.SET_TOTAL_PAGES: {
            let totalPages = action.payload;
            return {
                ...state,
                totalPages,
            }
        }
        default:
            return state;
    }
}

export default reducer;