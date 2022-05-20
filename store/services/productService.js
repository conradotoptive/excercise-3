import axios from 'axios';
import { setProductList } from '../slices/products';

export const getActiveProducts = () => (dispatch) => {
    axios
    .get("http://localhost:3001/api/products")
    .then((response) => {
        dispatch(setProductList(response.data.docs));
    })
    .catch((err) => console.log(err));
}

export const getAllProducts = () => (dispatch) => {
    axios
    .get("http://localhost:3001/api/products/all")
    .then((response) => {
        dispatch(setProductList(response.data.docs));
    })
    .catch((err) => console.log(err));
}

export const getOneProduct = (id) => {
    axios
    .get(`http://localhost:3001/api/products/${id}`)
    .then((response) => {
        return response;
    })
    .catch((err) => console.log(err));
}

export const updateProductState = (id) => {
    axios
    .put(`http://localhost:3001/api/products/${id}`)
    .then((response) => {
        return response;
    })
    .catch ((err) => console.log(err));
}