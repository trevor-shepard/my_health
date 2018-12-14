import { connect } from 'react-redux';
import { signup, login, clearSessionErrors } from '../../actions/session_actions';

import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: 'SIGN UP'
})

const mapDispatchToProps = dispatch => ({
  formSubmit: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearSessionErrors()),
  login: (user) => dispatch(login(user)),

});


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

