import { RECEIVE_CLINICS } from '../actions/clinic_actions'


const clinicsReducer = (state= {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_CLINICS:
            return action.clinics
        default:
            return state
    }

}

export default clinicsReducer;