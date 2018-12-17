import { combineReducers } from 'redux';

import userReducer from './user_reducer';
import appointmentReducer from './appointments_reducer'

const entitiesReducer = combineReducers({
    user: userReducer,
    appointments: appointmentReducer
});


export default entitiesReducer;