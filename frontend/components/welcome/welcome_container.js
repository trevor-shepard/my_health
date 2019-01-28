import { connect } from 'react-redux'
import { fetchAppointments } from '../../actions/appointment_actions'
import { fetchProviders } from '../../actions/provider_actions'
import { fetchClinics } from '../../actions/clinic_actions'

import Welcome from './welcome'

const mapStateToProps = (state) => ({
  appointments: state.entities.appointments,
  providers: state.entities.providers,
  clinics: state.entities.clinics
})

const mapDispatchToProps = () => dispatch => ({
  fetchAppointments: () => dispatch(fetchAppointments()),
  fetchProviders: () => dispatch(fetchProviders()),
  fetchClinics: () => dispatch(fetchClinics())
})


export default connect(mapStateToProps, mapDispatchToProps)(Welcome)