import React from "react"

import { jsonToDate, getWeekday, getMonth } from '../../util/date'


class AppointmentShow extends React.Component {
    constructor(props) {
        super(props)
        const appointment = this.props.appointments[this.props.match.params.id]
        const provider = this.props.providers[appointment.provider_id]
        const clinic = this.props.clinics[provider.primary_clinic_id]
        this.state = {
            appointment: appointment,
            provider: provider,
            clinic: clinic
        }
        this.handleCancel = this.handleCancel.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    handleCancel() {
        this.props.cancelAppointment(this.state.appointment.id)
        .then(() => {
            this.props.history.push('/')
        })
    }

    handleSubmit() {
        const modal = document.getElementById('confirm-cancel-modal')
        const greyArea = document.getElementById('grey-area')

        greyArea.classList.add('z-three')
        greyArea.addEventListener('click', this.hideModal)
        
        modal.classList.add('show')
    }

    hideModal(e) {
        if (!(e.target === "confirm-cancel-modal")) {
            let modal = document.getElementById("confirm-cancel-modal")
            
            let grey = document.getElementById('grey-area')
            
            
            modal.classList.remove("show")
            grey.classList.remove("z-three")
            
        }
    }

    render(){
        let reason
        if (this.state.appointment.reason === 'new_problem') {
            reason = 'Regular Office Visit'
        } else if (this.state.appointment.reason === 'follow_up') {
            reason = 'Follow Up Visit'
        } else if (this.state.appointment.reason === 'anual_wellness') {
            reason = 'Anual Wellness Visit'
        } else if (this.state.appointment.reason === 'child') {
            reason = 'Child'
        }
        let date = jsonToDate(this.state.appointment.start)

        
        return(
            <div id="content-container">
                <div id="grey-area" className="neg-z-one"/>
                <div id="confirm-cancel-modal" className='hidden appointment-show-modal'>
                    <h1 className="appointment-show-title">Confirm Cancel</h1>
                    <div className='appoinment-show-modal-text'>Please confirm that you would like your appointment with {this.state.provider.fname} {this.state.provider.lname}, {this.state.provider.degree} on {getWeekday(date.getDay().toString())} {getMonth(date.getMonth())} {date.getDate()} to be canceled</div>
                    <button className='start-over-button m-button' onClick={this.handleCancel}>
                        CANCEL
                    </button>
                </div> 
                

                <div className='content'>
                    <h1 className='appointment-show-title'>{reason} with {this.state.provider.fname} {this.state.provider.lname}, {this.state.provider.degree}</h1>
                    <div className='appointment-show-detail'>
                        <div className='appointment-show-detail-top'>
                            <div className='appointment-show-time-directions'>
                                <div className='appointment-show-time'>
                                    <i className="far fa-clock"></i>
                                    <div>{getWeekday(date.getDay().toString())} {getMonth(date.getMonth())} {date.getDate()}, {date.getFullYear()} {date.getHours()}:{date.getMinutes()} (40 minutes) PST</div>
                                </div>
                                <div className="appointment-show-driving">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div>
                                        {this.state.clinic.parking_instructions}
                                    </div>
                                </div>
                            </div>
                            
                            <div className='appointment-show-clinic'>
                                <h1 className='appointment-show-clinic-name'>{this.state.clinic.name}</h1>
                                <h1 className='appointment-show-clinic-address'>{this.state.clinic.address}{this.state.clinic.suite ? ` Suite:${this.state.clinic.suite}` : ""} {this.state.clinic.city} {this.state.clinic.state} {this.state.clinic.zip}</h1>
                                <h1 className='appointment-show-clinic-phone'>{this.state.clinic.phone}</h1>
                            </div>
                        </div>
                        <div className='appointment-show-greybar'></div>
                        <div className='appointment-show-cancel'>
                            <div>
                                If you need to cancel an appointment, please help us to serve you and our other patients by giving us as much advance notice as possible.
                            </div>
                            <button className='start-over-button m-button' onClick={this.handleSubmit}>
                                CANCEL
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default AppointmentShow;