import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';

import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: 'SIGN UP'
})

const mapDispatchToProps = dispatch => ({
  formSubmit: (user) => dispatch(signup(user)),
  

});


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

