import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import appointmentErrorsReducer from './appointment_errors_reducer'

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    appointments: appointmentErrorsReducer
});


export default errorsReducer;