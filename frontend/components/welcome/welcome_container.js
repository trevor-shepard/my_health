import { connect } from 'react-redux'
import { fetchAppointments } from '../../actions/appointment_actions'
import { fetchProviders } from '../../actions/provider_actions'

import Welcome from './welcome'

const mapStateToProps = (state) => ({
  appointments: state.entities.appointments,
  providers: state.entities.providers
})

const mapDispatchToProps = () => dispatch => ({
  fetchAppointments: () => dispatch(fetchAppointments()),
  fetchProviders: () => dispatch(fetchProviders())
})


export default connect(mapStateToProps, mapDispatchToProps)(Welcome)