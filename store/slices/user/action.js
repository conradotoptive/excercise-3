import { logIn, register } from "../../services/userService";

export const actionTypes = {
    SET_USER: 'SET_USER',
    LOG_USER_IN: 'LOG_USER_IN',
    LOG_USER_OUT: 'LOG_USER_OUT',
};

export function logInUser(mail) {
    return async (dispatch, store) => {
        try {
            const res = await logIn(mail);
            const json = await res.json();
            const user = json;
            await dispatch(setUser({ user }));
            await logUserIn();
            return user;
        } catch (err) {
            console.log(err);
        }
    }
}

export function registerUser(userName, mail, password) {
    return async (dispatch, store) => {
        try {
            const res = await register(userName, mail, password);
            const json = await res.json();
            const user = json;
            await dispatch(setUser({ user }));
            await logUserIn();
            return user;
        } catch (err) {
            console.log(err);
        }
    }
}

export function setUser(payload) {
    return {
        type: actionTypes.SET_USER,
        payload,
    }
}

export function logUserIn() {
    return {
        type: actionTypes.LOG_USER_IN,
    }
}

export function logUserOut() {
    return {
        type: actionTypes.LOG_USER_OUT,
    }
}