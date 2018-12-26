import {
    RECEIVE_APPPOINTMENT,
    RECEIVE_APPPOINTMENTS,
    REMOVE_APPOINTMENT
} from '../../actions/appointment_actions'


const appointmentReducer = (state={}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_APPPOINTMENT:
            return Object.assign({}, state, {[action.appointment.id]: action.appointment})
        case RECEIVE_APPPOINTMENTS:
            return Object.assign({}, state, action.appointments)
        case REMOVE_APPOINTMENT:
            let newState = Object.assign({}, state)
            delete newState[action.appointmentId]
            return newState
        default:
            return state;
    }
}

export default appointmentReducer;