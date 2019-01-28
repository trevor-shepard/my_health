import { connect } from 'react-redux'
import UpcomingModal from './upcoming_modal'

const mapStateToProps = state => ({
    appointments: state.entities.appointments,
    providers: state.entities.providers,
    clinics: state.entities.clinics
})

export default connect(mapStateToProps)(UpcomingModal)