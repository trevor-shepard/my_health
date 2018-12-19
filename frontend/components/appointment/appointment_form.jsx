import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import ReasonForm from './reason_form'
import DemographicConfirm from './demographic_confirm'
import LocationForm from './location'
import ProviderSelect from './provider_select'
import DateSelect from './date_select'
import TimeSelect from './time_select'

class AppointmentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_id: props.user.id,
            provider_id: null,
            start: null,
            end: null,
            notes: null,
            reason: null,
            city: null
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

    setLocation() {
        return (city) => {
            this.setState(
                {city: city},
                () => {
                    this.props.clearAppointmentErrors()
                    this.props.history.push('/appointments/provider')
                })
        }
    }


    setProvider() {
        return (provider_id) => {
            this.setState(
                {provider_id: provider_id},
                () => {
                    this.props.clearAppointmentErrors()
                    this.props.history.push('/appointments/date')
                })
        }
    }

    setDate() {
        return (start, end) => {
            this.setState(
                {startDate: start, endDate: end},
                () => {
                    this.props.clearAppointmentErrors()
                    this.props.history.push('/appointments/time')
                }
            )
        }
    }

    setTime() {

        return this.setState(
            
        )
    }


    render() {
        return (
            <div className='content-container'>
                <div className='content'>
                    <HashRouter>
                        <Switch>
                            <Route 
                                path='/appointments/new' 
                                component={() => <ReasonForm  setReason={this.setReason} />} 
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
                                path='/appointments/confirm'
                                component={()=> <TimeSelect 
                                setTime={this.setTime}
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