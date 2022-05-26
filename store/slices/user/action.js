import { logIn, register } from "../../services/userService";

export const actionTypes = {
    SET_USER: 'SET_USER',
    LOG_USER_IN: 'LOG_USER_IN',
    LOG_USER_OUT: 'LOG_USER_OUT',
};

export function logInUser(mail, password) {
    return async (dispatch, store) => {
        try {
            const res = await logIn(mail, password);
            if (res === 404) {
                return 404
            }
            if (res === 401) {
                return 401
            }
            const user = res.data;
            await dispatch(setUser(user));
            await dispatch(logUserIn());
        } catch (err) {
            console.log(err);
        }
    }
}

export function registerUser(userName, mail, password) {
    return async (dispatch, store) => {
        try {
            const res = await register(userName, mail, password);
            if (res === 404) {
                return 404
            }
            const user = res.data;
            console.log(user)
            await dispatch(setUser(user));
            await dispatch(logUserIn());
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