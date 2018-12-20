export const fetchSlots  = (provider_id, start, end) =>(
    $.ajax({
        method: 'get',
        url: `/api/shifts`,
        data: {
            id: provider_id, 
            start,
            end
        }

    })
)
