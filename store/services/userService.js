import axios from 'axios';
import { logUserIn, logUserOut } from '../slices/user';

export const logIn = () => (dispatch) => {
    axios
    .post("http://localhost:3001/api/login")
    .then((response) => {
        dispatch(logUserIn(response.data.data));
    })
    .catch((err) => console.log(err));
}

export const register = () => (dispatch) => {
    axios
    .post("http://localhost:3001/api/register")
    .then((response) => {
        dispatch(logUserIn(response.data.data));
    })
    .catch((err) => console.log(err));
}

export const logOut = () => (dispatch) => {
    dispatch(logUserOut);
}