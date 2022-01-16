import { combineReducers } from 'redux';
import browser from './browser';
import auth from './auth';

export const rootReducer = combineReducers({browser, auth})