import { getCartItems, getCartItem } from "../../services/cartService";

export const actionTypes = {
    SET_CART_LIST: 'SET_CART_LIST',
    SET_CART_ITEM: 'SET_CART_ITEM',
    CLEAR_CART_LIST: 'CLEAR_CART_LIST',
};

export function requestCartItems() {
    return async (dispatch, store) => {
        try {
            const res = await getCartItems();
            const json = await res.json();
            const { list }  = json;
            await dispatch(setCartList({ list }));
        } catch (err) {
            console.log(err);
        }
    }
}

export function requestCartItem(id) {
    return async (dispatch, store) => {
        try {
            const res = await getCartItem(id);
            const json = await res.json();
            const item  = json;
            await dispatch(setCartItem({ item }));
            return item;
        } catch (err) {
            console.log(err);
        }
    }
}

export function setCartItem(payload) {
    return {
        type: actionTypes.SET_CART_ITEM,
        payload,
    };
}

export function setCartList(payload) {
    return {
        type: actionTypes.SET_CART_LIST,
        payload,
    };
}

export function clearCart() {
    return {
        type: actionTypes.CLEAR_CART_LIST,
    };
}