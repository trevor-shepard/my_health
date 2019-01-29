import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import ReasonForm from './reason_form'
import DemographicConfirm from './demographic_confirm'
import LocationForm from './location'
import ProviderSelect from './provider_select'
import DateSelect from './date_select'
import TimeSelectContainer from './time_select_container'
import AppointmentConfirm from './appointment_confirm'

class AppointmentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_id: props.user.id
        }

        this.setReason = this.setReason.bind(this)
        this.confirmDemographics = this.confirmDemographics.bind(this)
        this.setLocation = this.setLocation.bind(this)
        this.setProvider = this.setProvider.bind(this)
        this.setDate = this.setDate.bind(this)
        this.setTime = this.setTime.bind(this)
    }

    componentDidMount() {
        this.props.fetchClinics()
    }

    setReason(reason) {
        return (e) => {
            this.setState(
                {reason: reason}, 
                () => {
                    
                    this.props.clearAppointmentErrors()
                    this.props.history.push('/appointments/demographics')
                })
            
        }
    }

    confirmDemographics() {

        
        this.props.clearAppointmentErrors()
        this.props.history.push('/appointments/location')
    }

    setLocation(city) {
        return () => {
            this.setState(
                {city: city},
                () => {
                    this.props.clearAppointmentErrors()
                    this.props.history.push('/appointments/provider')
                })
        }
    }


    setProvider(provider_id) {
        return () => {
            this.setState(
                {provider_id: provider_id},
                () => {
                    
                    this.props.clearAppointmentErrors()
                    this.props.history.push('/appointments/date')
                })
        }
    }

    setDate(start, end) {
        return () => {
            this.setState(
                {startDate: start, endDate: end},
                () => {
                    this.props.clearAppointmentErrors()
                    this.props.history.push('/appointments/time')
                }
            )
        }
    }

    setTime(startTime) {

        return () => {
            let endTime = new Date(startTime.getTime() + 1200000);
            this.setState(
                {start: startTime, end: endTime },
                () => {
                    console.log(this.state)
                    this.props.history.push('/appointments/confirm')
                }
            )
        }
    }


    render() {
        return (
            <div id='content-container'>
                <div className='content'>
                    <HashRouter>
                        <Switch>
                            <Route 
                                path='/appointments/new' 
                                component={() => <ReasonForm 
                                    setReason={this.setReason} 
                                />} 
                            />
                            <Route 
                                path='/appointments/demographics' 
                                component={() => <DemographicConfirm  
                                    confirmDemographics={this.confirmDemographics} 
                                    user={this.props.user} 
                                />} 
                            />
                            <Route 
                                path='/appointments/location' 
                                component={()=> <LocationForm 
                                    setLocation={this.setLocation} 
                                    city={this.props.user.city} 
                                    state={this.props.user.state} 
                                />} 
                            />
                            <Route 
                                path='/appointments/provider' 
                                component={() => <ProviderSelect 
                                    setProvider={this.setProvider}
                                    providers={this.props.providers}
                                    clinics={this.props.clinics}
                                />}
                            />
                            <Route
                                path='/appointments/date'
                                component={()=> <DateSelect 
                                    setDate={this.setDate}
                                />}
                            />
                            <Route
                                path='/appointments/time'
                                component={()=> <TimeSelectContainer 
                                    setTime={this.setTime}
                                    provider={this.props.providers[this.state.provider_id]}
                                    start={this.state.startDate}
                                    end={this.state.endDate}
                                />}
                            
                            />
                            <Route 
                                path='/appointments/confirm'
                                component={()=> <AppointmentConfirm 
                                    user_id={this.props.user.id}
                                    provider={this.props.providers[this.state.provider_id]}
                                    clinic={this.props.clinics[this.props.providers[this.state.provider_id].primary_clinic_id]} 
                                    start={this.state.start}
                                    end={this.state.end}
                                    reason={this.state.reason}
                                    createAppointment={this.props.createAppointment}
                                />}
                            />

                        </Switch>
                    </HashRouter>
                    
                </div>
                <div className='sidebar'>

                </div>
            </div>
        )
    }
}

export default AppointmentForm