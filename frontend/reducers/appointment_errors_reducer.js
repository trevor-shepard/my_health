import { RECIEVE_APPOINTMENT_ERRORS, CLEAR_APPOINTMENT_ERRORS, RECEIVE_APPPOINTMENT, RECEIVE_APPPOINTMENTS } from '../actions/appointment_actions'

const appointmentErrorReducer = (state=[], action) => {
    Object.freeze(state)

    switch(action.type) {
        case RECIEVE_APPOINTMENT_ERRORS:
            return action.errors
        
        case CLEAR_APPOINTMENT_ERRORS:
            return []

        case RECEIVE_APPPOINTMENT:
            return []
        
        case RECEIVE_APPPOINTMENTS:
            return []
        
        default:
            return state
    }
}

export default appointmentErrorReducer