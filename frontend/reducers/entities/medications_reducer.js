import {RECEIVE_MEDICATIONS} from '../../actions/medications_actions'


const medicationsReducer = (state= {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_MEDICATIONS:
            return action.medications
        default:
            return state
    }
}

export default medicationsReducer