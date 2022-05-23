import { actionTypes } from './action';

export const initialState = {
    user: {},
    isLogged: false,
}

function reducer (state = initialState, action) {
    switch (action.types) {
        case actionTypes.SET_USER: {
            let { user } = action.payload;
            return {
                ...state,
                user,
            }
        }
        case actionTypes.LOG_USER_IN: {
            return {
                ...state,
                isLogged: true,
            }
        }
        case actionTypes.LOG_USER_OUT: {
            return {
                ...state,
                isLogged: false,
            }
        }
        default:
            return state;
    }
}

export default reducer;