import {connect } from 'react-redux'
import { fetchMedications } from '../../actions/medications_actions'
import { fetchPrescriptions } from '../../actions/prescription_actions'
import PrescriptionForm from './prescription_form'

const mapStateToProps = (state) => ({
    medications: state.entities.medications,
    prescriptions: state.entities.prescriptions,
    providers: state.entities.providers
})

const mapDispatchToProps = dispatch => ({
    fetchMedications: () => dispatch(fetchMedications()),
    fetchPrescriptions: () => dispatch(fetchPrescriptions()),

})

export default connect(mapStateToProps, mapDispatchToProps)(PrescriptionForm)