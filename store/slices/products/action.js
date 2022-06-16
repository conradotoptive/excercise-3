import { getActiveProducts,
getAllProducts,
getOneProduct,
updateProductQuantity } from "../../services/productService";

export const actionTypes = {
    SET_PRODUCT_LIST: 'SET_PRODUCT_LIST',
    SET_PRODUCT: 'SET_PRODUCT',
    CLEAR_PRODUCT_LIST: 'CLEAR_PRODUCT_LIST',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
    SET_TOTAL_PAGES: 'SET_TOTAL_PAGES',
};

export function requestActiveProducts(page) {
    return async (dispatch, store) => {
        try {
            const res = await getActiveProducts(page);
            const productList = res.docs;
            const totalPages = res.totalPages;
            const currentPage = res.page;
            await dispatch(setProductList(productList));
            await dispatch(setCurrentPage(currentPage));
            await dispatch(setTotalPages(totalPages));
        } catch (err) {
            console.log(err);
        }
    }
}

export function requestAllProducts(page) {
    return async (dispatch, store) => {
        try {
            const res = await getAllProducts(page);
            const product = res.docs;
            const totalPages = res.totalPages;
            const currentPage = res.page;
            await dispatch(setCurrentPage(currentPage));
            await dispatch(setTotalPages(totalPages));
            await dispatch(setProductList( product ));
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
            await dispatch(setProduct( product ));
        } catch (err) {
            console.log(err);
        }
    }
}

export function updateQuantity(id, product){
    return async (dispatch, store) => {
        try {
            const res = await updateProductQuantity(id, product);
            if (res === 404) {
                return 404
            }
            const updatedProduct = res;
            await dispatch(setProduct(updatedProduct));
        } catch (err){
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

export function setCurrentPage(payload) {
    return {
        type: actionTypes.SET_CURRENT_PAGE,
        payload,
    }
}

export function setTotalPages(payload) {
    return {
        type: actionTypes.SET_TOTAL_PAGES,
        payload,
    }
}