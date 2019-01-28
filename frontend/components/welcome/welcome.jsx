import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import AppointmentItem from './appointment_item'
import UpcomingModal from './upcoming_modal/upcoming_modal_container'

import caleandar from '../../util/caleandar'
import { jsonToDate, jsonToDateOnly, parseTimeFromJson } from '../../util/date'

class Welcome extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAppointments()
        this.props.fetchProviders()
        this.props.fetchClinics()
    }
    
    componentDidUpdate(oldProps) {
        
        // Calender sourced from https://github.com/jackducasse/caleandar 
        if ((Object.values(this.props.appointments).length && Object.values(this.props.providers).length)) {

            let provider

            let element = document.getElementById('caleandar')
            element.innerHTML = ""
    
            let appointments = Object.values(this.props.appointments)
            let events = appointments.map((el) => {
                
                provider = this.props.providers[el.provider_id]
                
                return {
                    'Date': jsonToDateOnly(el.start),
                    'Title': `Appointment with ${provider.fname} ${provider.lname} at ${parseTimeFromJson(el.start)}`
                }
            })
    
            let settings = {
                Color: '',
                LinkColor: '',
                NavShow: true,
                NavVertical: false,
                NavLocation: '',
                DateTimeShow: true,
                DateTimeFormat: 'mmm, yyyy',
                DatetimeLocation: '',                                                   
                EventClick: '',
                EventTargetWholeDay: false,
                DisabledDays: [],

            }
            
            caleandar(element, events, settings)
        }
    }
    
    showComingSoonModal() {
        let modal = document.getElementById("coming-soon-modal")
        
        modal.classList.add("coming-soon-show")

        setTimeout(() => {
            modal.classList.remove("coming-soon-show")
        },
        1700)
    }

    showUpcomingModal() {
        let modal = document.getElementById("upcoming-modal")
        modal.classList.add("show")
    }


    render() {

        let upcoming_appointments
        if (Object.values(this.props.appointments).length && Object.values(this.props.providers).length) {
            upcoming_appointments = Object.values(this.props.appointments).reduce((arr, appointment) => {
                if (jsonToDate(appointment.start) > Date.now()) {
                    arr.push(<AppointmentItem key={appointment.id} appointment={appointment} provider={this.props.providers[appointment.provider_id]} action={this.showUpcomingModal} />)
                }
                return arr
            },
            [])
        }

        


        return (
            <div className='content-container'>
                <div id="coming-soon-modal" className="coming-soon-modal">
                        <h1>Feature Coming Soon</h1>
                </div>
                <UpcomingModal />
                <div className='content'>
                    <h1 className='welcome-message'>Welcome!</h1>
                    <h3 className='second-welcome-message' >Upcoming Appointments</h3>
                    <div className='welcome-appointment-content'>
                        <div className='appointment-list'>
                            {upcoming_appointments}
                        </div>
                        <div className="appointment-calender-container">
                            <div id="caleandar">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar">
                    <h3 className='nav-welcome-message' >Quick Links</h3>
                    <Link to='/' >
                        <div className='sidebar-item blue-hover' onClick={this.showComingSoonModal}>
                            <i className="fas fa-poll-h welcome-sidebar-icon"></i>
                            <div>View test results</div>

                        </div>
                    </Link>
                    <Link to='/' >
                        <div className='sidebar-item blue-hover' onClick={this.showComingSoonModal}>
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
                    <Link to='/prescriptions' >
                        <div className='sidebar-item blue-hover'>
                            <i className="fas fa-pills welcome-sidebar-icon"></i>
                            <div>Refill medications</div>
                        </div>
                        
                    </Link>
                    <Link to='/' >
                        <div className='sidebar-item blue-hover' onClick={this.showComingSoonModal}>
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