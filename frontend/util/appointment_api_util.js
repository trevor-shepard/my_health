export const fetchAppointments = () => (
    $.ajax({
        method: 'get',
        url: '/api/appointments',
    })
)
export const fetchAppointment = appointmentId => (
    $.ajax({
        method: 'get',
        url: `/api/appointments/${appointmentId}`,
    })
)

export const createAppointment = appointment => (
    $.ajax({
        method: 'post',
        url: '/api/appointments',
        data: { appointment }
    })
)

export const updateAppointment = appointment => (
    $.ajax({
        method: 'post',
        url: `/api/appointments/${appointment.id}`,
        data: { appointment }
    })
)