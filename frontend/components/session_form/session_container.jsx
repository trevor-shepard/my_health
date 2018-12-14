import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';

import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: 'SIGN IN'
})

const mapDispatchToProps = dispatch => ({
  formSubmit: (user) => dispatch(login(user)),
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearSessionErrors()),
  

});


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

