import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import LogInFormContainer from './session_form/session_container'
import Splash from './session_form/splash'
import NavBarContainer from './navbar/navbar_container'

const App = () => (
  <div>
    <AuthRoute exact path="/login" component={Splash} />
    
    <ProtectedRoute path='/' component={NavBarContainer} />
    <Switch>

    </Switch>
  </div>
)

export default App