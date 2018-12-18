import * as ClinicApi from '../util/clinic_api_util'

export const RECEIVE_CLINICS = 'RECEIVE_CLINICS'



export const recieveClinics = (clinics) => ({
    type: RECEIVE_CLINICS,
    clinics
})



export const fetchClinics = () => dispatch => (
    ClinicApi.fetchClinics()
    .then(
        (response) => dispatch(recieveClinics(response))
    )
)