export const fetchProviders = () => (
    $.ajax({
        method:  'get',
        url: '/api/providers'
    })
)
export const fetchProvider = providerId => (
    $.ajax({
        method:  'get',
        url: `/api/providers/${providerId}`
    })
)