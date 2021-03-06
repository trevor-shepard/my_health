import { combineReducers } from 'redux';

import userReducer from './user_reducer';
import appointmentReducer from './appointments_reducer'
import providerReducer from './provider_reducer'
import clinicsReducer from './clinics_reducer'
import slotsReducer from './slots_reducer'
import prescriptionReducer from './prescriptions_reducer'
import medicationsReducer from './medications_reducer'

const entitiesReducer = combineReducers({
    user: userReducer,
    appointments: appointmentReducer,
    providers: providerReducer,
    clinics: clinicsReducer,
    slots: slotsReducer,
    prescriptions: prescriptionReducer,
    medications: medicationsReducer

});


export default entitiesReducer;