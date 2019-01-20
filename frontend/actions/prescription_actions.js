import * as Api from '../util/prescription_api_util'

export const RECEIVE_PRESCRIPTIONS = 'RECEIVE_PRESCRIPTIONS'
export const RECEIVE_PRESCRIPTION = 'RECEIVE_PRESCRIPTION'


export const receivePrescriptions = (prescriptions) => ({
    type: RECEIVE_PRESCRIPTIONS,
    prescriptions
})
export const receivePrescription = (prescription) => ({
    type: RECEIVE_PRESCRIPTION,
    prescription
})

export const fetchPrescriptions = () => dispatch => (
    Api.fetchPrescriptions()
    .then(
        (response) => dispatch(receivePrescriptions(response))
    )
)

export const requestRefill = (prescription_id) => dispatch => (
    Api.requestRefill(prescription_id)
    .then(
        (response) => dispatch(receivePrescription(response))
    )
)