import { getActiveProducts,
getAllProducts,
getOneProduct } from "../../services/productService";

export const actionTypes = {
    SET_PRODUCT_LIST: 'SET_PRODUCT_LIST',
    SET_PRODUCT: 'SET_PRODUCT',
    CLEAR_PRODUCT_LIST: 'CLEAR_PRODUCT_LIST',
};

export function requestActiveProducts() {
    return async (dispatch, store) => {
        try {
            const res = await getActiveProducts();
            const productList = res.docs;
            await dispatch(setProductList(productList));
        } catch (err) {
            console.log(err);
        }
    }
}

export function requestAllProducts() {
    return async (dispatch, store) => {
        try {
            const res = await getAllProducts();
            const product = res;
            await dispatch(setProductList( product ));
            return product;
        } catch (err) {
            console.log(err);
        }
    }
}

export function requestOneProduct(id) {
    return async (dispatch, store) => {
        try {
            const res = await getOneProduct(id);
            const  product  = res;
            await dispatch(setProductList( product ));
        } catch (err) {
            console.log(err);
        }
    }
}

export function setProductList(payload) {
    return {
        type: actionTypes.SET_PRODUCT_LIST,
        payload,
    }
}

export function setProduct(payload) {
    return {
        type: actionTypes.SET_PRODUCT,
        payload,
    }
}

export function clerProductList() {
    return {
        type: actionTypes.CLEAR_PRODUCT_LIST,
    }
}