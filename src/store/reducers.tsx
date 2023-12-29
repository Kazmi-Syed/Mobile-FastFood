import { authReducer } from './auth_reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    authReducer : authReducer
})


export {
    rootReducer
}