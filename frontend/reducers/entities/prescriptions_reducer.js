import { RECEIVE_PRESCRIPTIONS, RECEIVE_PRESCRIPTION} from '../../actions/prescription_actions'


const clinicsReducer = (state= {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_PRESCRIPTIONS:
            return action.prescriptions
        case RECEIVE_PRESCRIPTION:
            return Object.assign({}, state, {[action.prescription.id]: action.prescription})
        default:
            return state
    }
}

export default clinicsReducer