import * as actionTypes from './actionTypes'
import axios from '../../api/axios/index';

var jwt = require('jsonwebtoken');

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const logIn = (email, password, rememberMe) => 
    async (dispatch) => {
        try {
            const loginData = await loginPost(email, password);
            return loginData;
        } catch(err) {
            dispatch(authError(err.response.data))
            throw new Error(err.response.data.status)
        }
    }

async function loginPost(email, password) {
    let loginPromise = new Promise();
    return async (dispatch) => {
        try {
            const result = await axios.post('/auth/login', {
                email: email,
                password: password
            })
            dispatch(authSuccess(result.data.session.access_token))
            loginPromise.resolve(result.data)
        } catch(err) {
            loginPromise.reject(new Error(err));
        }
        // return promise that contains login data or error
        return loginPromise;
    }
}

export const signUp = (email, password) => 
    async (dispatch) => {
        try {
            var result = await axios.post('/auth/signup', {
                email: email,
                password: password
            })
            return result.data
        } catch(err) {
            dispatch(authError(err.response.data))
            throw new Error(err.response.data.status)
        }
    }


export const authError = error => {
    return {
        type: actionTypes.AUTH_ERROR,
        error: error
    }
}