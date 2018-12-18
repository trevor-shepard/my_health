import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import ReasonForm from './reason_form'
import DemographicConfirm from './demographic_confirm'


class AppointmentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_id: props.user.id,
            provider_id: null,
            start: null,
            end: null,
            notes: null,
            reason: null
        }

        this.setReason = this.setReason.bind(this)
        this.confirmDemographics = this.confirmDemographics.bind(this)
        this.setLocation = this.setLocation.bind(this)
        this.setProvider = this.setProvider.bind(this)
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
        return (e) => {
            
            this.props.clearAppointmentErrors()
            this.props.history.push('/appointments/location')
        }
    }

    setLocation() {
        return (clinic_id) => {
            this.setState(
                {clinic_id: clinic_id},
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
        return (date) => {
            this.setState(
                {start: date},
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
                            <Route path='/appointments/new' component={() => <ReasonForm  setReason={this.setReason} />} />
                            <Route path='/appointments/demographics' component={() => <DemographicConfirm  confirmDemographics={this.confirmDemographics} />} />
                            <Route path='/appointments/location' component={()=> <LocationForm setLocation={this.setLocation} />} />
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