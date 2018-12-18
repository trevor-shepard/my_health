import * as AppointmentApiUtil from '../util/appointment_api_util';

export const RECEIVE_APPPOINTMENT = 'RECEIVE_APPPOINTMENT';
export const RECEIVE_APPPOINTMENTS = 'RECEIVE_APPPOINTMENTS';
export const REMOVE_APPOINTMENT = 'REMOVE_APPOINTMENT';
export const RECIEVE_APPOINTMENT_ERRORS = 'RECIEVE_APPOINTMENT_ERRORS';
export const CLEAR_APPOINTMENT_ERRORS = 'CLEAR_APPOINTMENT_ERRORS';

// Action Creators
export const recieveAppointment = (appointment) => ({
    type: RECEIVE_APPPOINTMENT,
    appointment
})

export const recieveAppointments = (appointments) => ({
    type: RECEIVE_APPPOINTMENTS,
    appointments
})

export const removeAppointment = (appointmentId) => ({
    type: REMOVE_APPOINTMENT,
    appointmentId
})


export const recieveAppointmentErrors = (errors) => ({
    type: RECIEVE_APPOINTMENT_ERRORS,
    errors
})

export const clearAppointmentErrors = () => ({
    type: CLEAR_APPOINTMENT_ERRORS
})

// thunk action controllers

export const createAppointment = (appointment) => dispatch => (
    AppointmentApiUtil.createAppointment(appointment)
    .then(
        (response) => dispatch(recieveAppointment(response)),
        (response) => dispatch(recieveAppointmentErrors(response.responseJSON))
    )
)

export const fetchAppointment = (appointmentId) => dispatch  => (
    AppointmentApiUtil.fetchAppointment(appointmentId)
    .then(
        (response) => dispatch(recieveAppointment(response)),
        (response) => dispatch(recieveAppointmentErrors(response.responseJSON))
    )
)

export const fetchAppointments = () => dispatch  => (
    AppointmentApiUtil.fetchAppointments()
    .then(
        (response) => dispatch(recieveAppointments(response)),
        (response) => dispatch(recieveAppointmentErrors(response.responseJSON))
    )
)

export const updateAppointment = (appointment) => dispatch => (
    AppointmentApiUtil.updateAppointment(appointment)
     .then(
        (response) => dispatch(recieveAppointment(response)),
        (response) => dispatch(recieveAppointmentErrors(response))
    )
)