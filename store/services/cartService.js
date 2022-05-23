import axios from "axios";

export const getCartItems = () => (dispatch) => {
    return axios
    .get("http://localhost:3001/api/cart")
    .then((response) => {
        return response;
    })
    .catch((err) => console.log(err));
}

export const getCartItem = (id) => {
    return axios
    .get(`http://localhost:3001/api/cart/${id}`)
    .then((response) => {
        return response;
    })
    .catch((err) => console.log(err));
}

export const createCartItem = () => {
    return axios
    .post("http://localhost:3001/api/cart")
    .then((response) => {
        return response;
    })
    .catch((err) => console.log(err));
}

export const deleteCartItem = (id) => {
    return axios
    .delete(`http://localhost:3001/api/cart/${id}`)
    .then((response) => {
        return response;
    })
    .catch((err) => console.log(err));
}

export const updateCartItem = (id) => {
    return axios
    .put(`http://localhost:3001/api/cart/${id}`)
    .then((response) => {
        return response;
    })
    .catch((err) => console.log(err));
}