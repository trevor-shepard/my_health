export const fetchMedications = () =>(
    $.ajax({
        method: 'get',
        url: '/api/medications'
    })
)