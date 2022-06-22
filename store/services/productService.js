import axios from 'axios';

export const getActiveProducts = (page) => {
    return axios
    .post("http://localhost:3001/api/products", { page })
    .then((response) => {
        return response.data;
    })
    .catch((err) => console.log(err));
}

export const getAllProducts = (page) => {
    return axios
    .post("http://localhost:3001/api/products/all", { page })
    .then((response) => {
       return response.data;
    })
    .catch((err) => console.log(err));
}

export const getOneProduct = (id) => {
    return axios
    .get(`http://localhost:3001/api/products/${id}`)
    .then((response) => {
        return response.data;
    })
    .catch((err) => console.log(err));
}

export const updateProductState = (id) => {
    return axios
    .put(`http://localhost:3001/api/products/${id}`)
    .then((response) => {
        return response.data;
    })
    .catch ((err) => console.log(err));
}

export const updateProductQuantity = (id, product, quantity) => {
    return axios
    .put(`http://localhost:3001/api/products/quantity/${id}`, { product, quantity })
    .then((response) => {
        return response.data;
    })
    .catch(function (err){
        console.log(err);
        return err.response.status;
    })
}