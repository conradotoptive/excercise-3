import axios from "axios";
import { setCartList } from "../slices/cart";

export const getCartItems = () => (dispatch) => {
    axios
    .get("http://localhost:3001/api/cart")
    .then((response) => {
        dispatch(setCartList(response.data.data));
    })
    .catch((err) => console.log(err));
}

export const getCartItem = (id) => {
    axios
    .get(`http://localhost:3001/api/cart/${id}`)
    .then((response) => {
        return response;
    })
    .catch((err) => console.log(err));
}

export const createCartItem = () => {
    axios
    .post("http://localhost:3001/api/cart")
    .then((response) => {
        return response;
    })
    .catch((err) => console.log(err));
}

export const deleteCartItem = (id) => {
    axios
    .delete(`http://localhost:3001/api/cart/${id}`)
    .then((response) => {
        return response;
    })
    .catch((err) => console.log(err));
}

export const updateCartItem = (id) => {
    axios
    .put(`http://localhost:3001/api/cart/${id}`)
    .then((response) => {
        return response;
    })
    .catch((err) => console.log(err));
}