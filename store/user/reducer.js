import { actionTypes } from './action';

export const initState = {
    isLoggedIn: false,
    user: {}
}

function reducer (state = initState, action){
    switch(action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                
            };
        case actionTypes.LOGIN_FAIL:
            return {

            };
        default: 
            return state
    }
}

export default reducer;