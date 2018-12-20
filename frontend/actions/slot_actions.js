import * as SlotApi from '../util/slot_api'

export const RECEIVE_SLOTS = 'RECEIVE_SLOTS'
export const RECEIVE_SLOT_ERRORS = 'RECEIVE_SLOT_ERRORS'

export const receiveSlots = (slots) => ({
    type: RECEIVE_SLOTS,
    slots

})

export const receiveSlotErrors = (error) => ({
    type: RECEIVE_SLOT_ERRORS,
    error
})

export const fetchSlots = (provider_id, start, end) => dispatch => {
    
    SlotApi.fetchSlots(provider_id, start, end)
    .then(
        (response) => dispatch(receiveSlots(response)),
        (response) => dispatch(receiveSlotErrors(response))
    )
    
    }