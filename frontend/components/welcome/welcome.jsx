import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import AppointmentItem from './appointment_item'
import UpcomingModal from './upcoming_modal/upcoming_modal_container'

import Calender from '../../util/ezcal'
import { jsonToDate, jsonToDateOnly, parseTimeFromJson } from '../../util/date'

class Welcome extends Component {
    constructor(props){
        super(props)
        this.showUpcomingModal = this.showUpcomingModal.bind(this)
        this.hideUpcomingModal = this.hideUpcomingModal.bind(this)
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
            
            let element = document.getElementById('ez-cal')
            element.innerHTML = ""

            let cal = new Calender(element)
    
            let appointments = Object.values(this.props.appointments)
            appointments.forEach(appointment => {
                let apptDay = jsonToDateOnly(appointment.start)
                provider = this.props.providers[appointment.provider_id]
                cal.addTitle(apptDay, `Appointment with ${provider.fname} ${provider.lname} at ${parseTimeFromJson(appointment.start)}`)
                cal.addClick(apptDay, this.showUpcomingModal)
            })

            cal.mountDays()
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

    hideUpcomingModal(e) {
        if (!(e.target === "upcoming-modal")) {
            let modal = document.getElementById("upcoming-modal")
            modal.classList.remove("show")
            
            let grey = document.getElementById('grey-area')
            grey.classList.remove("z-three")

        }
    }

    showUpcomingModal(e) {
        let modal = document.getElementById("upcoming-modal")
        modal.classList.add("show")
        
        let greyArea = document.getElementById("grey-area")
    
        greyArea.addEventListener("click", this.hideUpcomingModal)
        greyArea.classList.add("z-three")

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

            upcoming_appointments.sort((a, b) => {
                let aDate = jsonToDate(a.props.appointment.start)
                let bDate = jsonToDate(b.props.appointment.start)
                return aDate - bDate
            })

        }

        


        return (
            <div id='content-container'>
                <div id="grey-area" className="neg-z-one"/>
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
                            <div id="ez-cal">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar">
                    <h3 className='nav-welcome-message' >Quick Links</h3>
                    {/* <Link to='/' >
                        <div className='sidebar-item blue-hover' onClick={this.showComingSoonModal}>
                            <i className="fas fa-poll-h welcome-sidebar-icon"></i>
                            <div>View test results</div>

                        </div>
                    </Link> */}
                    {/* <Link to='/' >
                        <div className='sidebar-item blue-hover' onClick={this.showComingSoonModal}>
                            <i className="far fa-comments welcome-sidebar-icon"></i>
                            <div>Send a message</div>
                        </div>
                    </Link> */}
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
                    {/* <Link to='/' >
                        <div className='sidebar-item blue-hover' onClick={this.showComingSoonModal}>
                            <i className="far fa-credit-card welcome-sidebar-icon"></i>     
                            <div>Pay your bill</div>
                        </div>
                    </Link> */}
                </div>
            </div>
        )
    }
}

export default Welcome