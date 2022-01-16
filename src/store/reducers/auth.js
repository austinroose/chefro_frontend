import * as actionTypes from '../actions/actionTypes'
import { updateObject } from "../utility"

const initialState = {
    token: null,
    error: null
};

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token
    })
}

const authError = (state, action) => {
    return updateObject(state, {
        error: action.error
    })
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action)
        case actionTypes.AUTH_ERROR: return authError(state, action);
        default:
            return state
    }
}

export default auth;