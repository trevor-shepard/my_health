export const fetchSlots  = (provider_id, start, end) =>(
    $.ajax({
        method: 'get',
        url: `/api/shifts/${provider_id}`,
        data: { 
            start,
            end
        }

    })
)