import ShiftApi from '../util/shift_api'

export const RECEIVE_SHIFT = 'RECEIVE_SHIFT'
export const RECEIVE_SHIFT_ERRORS = 'RECEIVE_SHIFT_ERRORS'

export const receiveShift = (shift) => ({
    action: RECEIVE_SHIFT,
    shift

})

export const receiveShiftErrors = (error) => ({
    action: RECEIVE_SHIFT_ERRORS,
    error
})

export const fetchShift = (provider_id, start, end) => dispatch => (
    ShiftApi.fetchShift(provider_id, start, end)
    .then(
        (response) => dispatch(receiveShift(response)),
        (response) => dispatch(receiveShiftErrors(response))
    )
)