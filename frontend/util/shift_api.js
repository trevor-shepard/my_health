export const fetchNextAvailableShift  = (provider_id, start, end) =>(
    $.ajax({
        method: 'get',
        url: `/api/shifts/${provider_id}`,
        data: { 
            date,
            end
        }

    })
)