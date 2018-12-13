import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import LogInFormContainer from './session_form/session_container'
import NavBarContainer from './navbar/navbar_container'

const App = () => (
  <div>
    <AuthRoute exact path="/login" component={LogInFormContainer} />
    
    <ProtectedRoute path='/' component={NavBarContainer} />
    <Switch>

    </Switch>
  </div>
);

export default App;