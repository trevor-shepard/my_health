import React, { Component } from 'react'
import AppointmentItem from './appointment_item'
import { Link } from 'react-router-dom'

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
            <div className='content-container'>
                <div className='content'>
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
                <div className="sidebar">
                    <h1>Quick Links</h1>
                    <Link to='/' >
                        <div className='sidebar-item blue-hover'>
                            <i className="fas fa-poll-h welcome-sidebar-icon"></i>
                            <div>View test results</div>

                        </div>
                    </Link>
                    <Link to='/' >
                        <div className='sidebar-item blue-hover'>
                            <i className="far fa-comments welcome-sidebar-icon"></i>
                            <div>Send a message</div>
                        </div>
                    </Link>
                    <Link to='/appointments/new' >
                        <div className='sidebar-item blue-hover'>
                            <i className="fas fa-calendar-day welcome-sidebar-icon"></i>
                            <div>Schedule an appointment</div>
                        </div>
                    </Link>
                    <Link to='/' >
                        <div className='sidebar-item blue-hover'>
                            <i className="fas fa-pills welcome-sidebar-icon"></i>
                            <div>Refill medications</div>
                        </div>
                        
                    </Link>
                    <Link to='/' >
                        <div className='sidebar-item blue-hover'>
                            <i className="far fa-credit-card welcome-sidebar-icon"></i>     
                            <div>Pay your bill</div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Welcome