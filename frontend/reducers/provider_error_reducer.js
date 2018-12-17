import { RECEIVE_PROVIDER, RECEIVE_PROVIDERS, RECEIVE_PROVIDER_ERRORS } from '../actions/provider_actions'

export default providerErrorReducer = (state={}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_PROVIDER:
            return {}
        case RECEIVE_PROVIDERS:
            return {}
        case RECEIVE_PROVIDER_ERRORS:
            return action.errors
        default:
            return state
    }
}