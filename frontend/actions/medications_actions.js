import * as Api from '../util/medications_api'

export const RECEIVE_MEDICATIONS = 'RECEIVE_MEDICATIONS'


export const recieveMedications = (medications) => ({
    type: 'RECEIVE_MEDICATIONS',
    medications
})


export const fetchMedications = () => dispatch => (
    Api.fetchMedications()
    .then(
        (response) => dispatch(recieveMedications(response))
    )
)