import axios from 'axios';

export const logIn = (mail) => {
    return axios
    .post("http://localhost:3001/api/auth/login", { mail })
    .then((response) => {
        return response;
    })
    .catch((err) => console.log(err));
}

export const register = (userName, mail, password) => {
    return axios
    .post("http://localhost:3001/api/auth/register", { userName, mail, password })
    .then((response) => {
        return response;
    })
    .catch((err) => console.log(err));
}
