import {connect} from 'react-redux'

import { cancelAppointment } from '../../actions/appointment_actions'

import AppointmentShow from './appointment_show'

const mapStateToProps = (state) => ({
    appointments: state.entities.appointments,
    providers: state.entities.providers,
    clinics: state.entities.clinics
})


const mapDispatchToProps = () => dispatch => ({
    cancelAppointment: (appointmentId) => dispatch(cancelAppointment(appointmentId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentShow)