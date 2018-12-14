import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './components/App'
import { logout } from './actions/session_actions'


document.addEventListener('DOMContentLoaded', () => {
  let preloadedState
  if (window.currentUser){
    preloadedState = {
      session: {id: currentUser.id},
      entities: {
        user: window.currentUser
      }
    }
  }
  
  const store = configureStore(preloadedState);

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.logout = logout;
  
  const root = document.getElementById('root');

  
  ReactDOM.render(<App store={ store } />, root);
});