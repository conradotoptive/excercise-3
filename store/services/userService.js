import axios from 'axios';

export const logIn = (mail, password) => {
    return axios
    .post("http://localhost:3001/api/auth/login", { mail, password })
    .then((response) => {
        return response;
    })
    .catch(function (err){
        console.log(err)
        return err.response.status;
    })
}

export const register = (userName, mail, password) => {
    return axios
    .post("http://localhost:3001/api/auth/register", { userName, mail, password })
    .then((response) => {
        return response;
    })
    .catch(function (err){
        console.log(err)
        return err.response.status;
    })
}
