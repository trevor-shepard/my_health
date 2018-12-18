export const fetchClinics = () => (
    $.ajax({
        method: 'get',
        url: '/api/clinics'
    })
)


