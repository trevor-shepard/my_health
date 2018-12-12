import { combineReducers } from 'redux';

import userReducer from './user_reducer';

const entitiesReducer = combineReducers({
    userReducer
});


export default entitiesReducer;