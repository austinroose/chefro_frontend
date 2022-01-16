import * as actionTypes from '../actions/actionTypes';

export const screenType = screenType => {
    return {
        type: actionTypes.SCREEN_TYPE,
        screenType: screenType
    }
}