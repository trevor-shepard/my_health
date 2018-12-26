import React from 'react';
import { Switch, HashRouter } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { Provider } from 'react-redux';

import Splash from './session_form/splash'
import WelcomeContainer from './welcome/welcome_container'
import NavBarContainer from './navbar/navbar_container'
import AppointmentFormContainer from './appointment/appointment_form_container'
import PrescriptionFormContainer from './prescriptions/prescription_form_container'


const App = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <div>
        <ProtectedRoute component={NavBarContainer} />
        <Switch>
          <AuthRoute exact path="/login" component={Splash} />
          <AuthRoute exact path='/signup' component={Splash} />
          <ProtectedRoute path='/appointments' component={AppointmentFormContainer} />
          <ProtectedRoute path='/prescriptions' component={PrescriptionFormContainer} />
          <ProtectedRoute path='/' component={WelcomeContainer} />
        </Switch>
      </div>  
    </HashRouter>
  </Provider>
)

export default App