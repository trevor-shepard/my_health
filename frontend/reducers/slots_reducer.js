import { RECEIVE_SLOTS } from '../actions/slot_actions'


const slotsReducer = (state={}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_SLOTS:
            return action.slots
        default:
            return state
    }
}

export default slotsReducer