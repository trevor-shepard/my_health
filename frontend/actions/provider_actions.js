export const RECEIVE_PROVIDERS = 'RECEIVE_PROVIDERS'
export const RECEIVE_PROVIDER = 'RECEIVE_PROVIDER'
export const RECEIVE_PROVIDER_ERRORS = 'RECEIVE_PROVIDER_ERRORS'


import * as ProviderApiUtil from '../util/provider_api_util'



export const recieveProviders = (providers) => ({
    type: RECEIVE_PROVIDERS,
    providers
})
export const recieveProvider = (provider) => ({
    type: RECEIVE_PROVIDER,
    provider
})
export const recieveProviderErrors = (errors) => ({
    type: RECEIVE_PROVIDER_ERRORS,
    errors
})


export const fetchProviders = () => dispatch => (
    ProviderApiUtil.fetchProviders()
    .then(
        (response) => dispatch(recieveProviders(response)),
        (response) => dispatch(recieveProviderErrors(response))
    )
)
export const fetchProvider = () => dispatch => (
    ProviderApiUtil.fetchProvider()
    .then(
        (response) => dispatch(recieveProvider(response)),
        (response) => dispatch(recieveProviderErrors(response))
    )
)