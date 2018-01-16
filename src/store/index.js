import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CourtReducer from './CourtReducer';


export default combineReducers({
    auth: AuthReducer,
    courts: CourtReducer,
})