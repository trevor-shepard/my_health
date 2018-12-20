import { connect } from  'react-redux' 
import { fetchSlots } from '../../actions/slot_actions'
import TimeSelect from './time_select'

const mapStateToProps = (state) => ({
    slots: state.entities.slots
  
})

const mapDispatchToProps = () => dispatch => ({
    fetchSlots: (provider_id, start, end) => dispatch(fetchSlots(provider_id, start, end))
})



export default connect(mapStateToProps, mapDispatchToProps)(TimeSelect)