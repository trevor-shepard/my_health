export const fetchPrescriptions = () => (
    $.ajax({
        method: 'get',
        url: '/api/prescriptions'
    })
)

export const requestRefill = (id) => (
    $.ajax({
        method: 'patch',
        url: `/api/prescriptions/${id}`
    })
)