import React, { Component } from 'react'
import AppointmentItem from './appointment_item'

class Welcome extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }

    componentDidMount(){
        this.props.fetchAppointments()
        this.props.fetchProviders()
    }

    render() {

        let appointments
        if (Object.values(this.props.appointments).length && Object.values(this.props.providers).length) {
            appointments = Object.values(this.props.appointments).map((appointment) => <AppointmentItem key={appointment.id} appointment={appointment} provider={this.props.providers[appointment.provider_id]} />)
        }
        return (
            <div className='welcome-container'>
                <div className='welcome-content'>
                    <h1 className='welcome-message'>Welcome!</h1>
                    <h3>Upcoming Appointments</h3>
                    <div className='welcome-appointment-content'>
                        <div className='appointment-list'>
                            {appointments}
                        </div>
                        <div className="appointment-calender-container">
                            i'm a calender
                        </div>
                    </div>
                </div>
                <div className="w-sidebar">
                    i'm a sidebar
                </div>
            </div>
        )
    }
}

export default Welcome