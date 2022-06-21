import { actionTypes } from "./action";

export const initialState = {
    item: null,
    list: [],
    currentPage: 0,
    totalPages: 0,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_CART_LIST: {
            let list = action.payload;
            return {
                ...state,
                list,
            }
        }
        case actionTypes.SET_CART_ITEM: {
            let item = action.payload;
            return {
                ...state,
                item,
            };
        }
        case actionTypes.CLEAR_CART_LIST: {
            return {
                ...state,
                list: [],
            }
        }
        case actionTypes.SET_CURRENT_CART_PAGE: {
            let currentPage = action.payload;
            return {
                ...state,
                currentPage,
            }
        }
        case actionTypes.SET_TOTAL_CART_PAGES: {
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