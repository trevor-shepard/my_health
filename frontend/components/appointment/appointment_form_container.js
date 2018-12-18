import { connect } from 'react-redux'

import { createAppointment, clearAppointmentErrors } from '../../actions/appointment_actions'
import AppointmentForm from './appointment_form'


const mapStateToProps = (state) => ({
  user: state.entities.user,
  providers: state.entities.providers
})

const mapDispatchToProps = () => dispatch => ({
    createAppointment: (appointment) => dispatch(createAppointment(appointment)),
    clearAppointmentErrors: () => dispatch(clearAppointmentErrors())  
})

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentForm)