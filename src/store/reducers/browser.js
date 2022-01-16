import { createCatchClause } from 'typescript';
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    screenType: null,
};

const screenType = (state, action) => {
    return updateObject(state, {
        screenType: action.screenType
    })
}

const browser = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SCREEN_TYPE: return screenType(state, action);
        default:
            return state;
    }
}

export default browser;