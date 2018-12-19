import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './components/App'
import { logout, signup } from './actions/session_actions'
import { fetchAppointment, fetchAppointments, updateAppointment, createAppointment } from  './actions/appointment_actions'
import { jsonToDate } from './util/date'




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

  window.getState = store.getState
  window.dispatch = store.dispatch
  window.logout = logout
  window.signup = signup
  window.fetchAppointment = fetchAppointment
  window.fetchAppointments = fetchAppointments
  window.updateAppointments = updateAppointment
  window.createAppointment = createAppointment
  window.jsonToDate = jsonToDate
  
  const root = document.getElementById('root')

  
  ReactDOM.render(<App store={ store } />, root)
});