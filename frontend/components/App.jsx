import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Splash from './session_form/splash'
import NavBarContainer from './navbar/navbar_container'

const App = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <div>
        <Switch>
          <AuthRoute exact path="/login" component={Splash} />
          
          <ProtectedRoute path='/' component={NavBarContainer} />

        </Switch>
      </div>  
    </HashRouter>
  </Provider>
)

export default App