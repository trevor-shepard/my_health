import {
    RECEIVE_PROVIDER,
    RECEIVE_PROVIDERS,
} from '../../actions/provider_actions'

const providerReducer = (state={}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_PROVIDER:
            return Object.assign({}, state, {[action.provider.id]: action.appointment})
        case RECEIVE_PROVIDERS:
            return Object.assign({}, state, action.providers)
        default:
            return state
    }
}

export default providerReducer