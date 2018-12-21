import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { parseDatefromJSDateTime } from '../../util/date'

class AppointmentConfirm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: ''
        }
        this.handleInput = this.handleInput.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    handleInput(field) {
        return (e) => this.setState({ [field]: e.target.value })
    }

    submitForm() {
        
        let appointment = {
            user_id: this.props.user_id,
            provider_id: this.props.provider.id,
            start: this.props.start,
            end: this.props.end,
            notes: this.state.notes,
            reason: this.props.reason
        }

        this.props.createAppointment(appointment).then(() => this.props.history.push('/'))
    }

    render() {
        let reasons = {
            'new_problem': 'New Problem',
            'follow_up': 'Follow Up',
            'anual_wellness': 'Annual Wellness Exam/Physical',
            'child': 'Well Child Check'
        }

        let reason_display = reasons[this.props.reason]


        let date = parseDatefromJSDateTime(this.props.start)



        return (

            <div>
                <h1 className='two-rem'>Schedule an Appointment</h1>
                <div className='margin-twenty-one'>

                    <div className='confirmation-instructions'>
                        For urgent matters, please contact 911Do not use this site if you have an urgent or life threatening health problem. If you have an urgent or life threatening health problem, call 911.
    
            Please verify that all of the information on this page is correct and that this is the appointment that you intended to select.
    
            So that we may prepare you for your visit, your arrival time is 15 minutes before your appointment.
                    </div>

                    
                    <div className='appoingment-confirm-display margin-ten-top-bottom'>
                        <div className='display-titles'>
                            <div className='appointment-confirm-display-title margin-ten-top-bottom'>
                                {reason_display} with {this.props.provider.fname} {this.props.provider.lname}, {this.props.provider.degree}
                            </div>

                            <div className='appointment-confirm-details'>
                                <div className='appointment-confirm-details-item'>
                                    <i class="far fa-clock"></i>
                                    <div>
                                        {date}
                                    </div>
                                </div>
                                <div className='appointment-confirm-details-item'>
                                    <i class="fas fa-map-marked-alt"></i>
                                    <div>
                                        {this.props.clinic.name} ({this.props.clinic.state} {this.props.clinic.city})
                                    </div>
                                </div>
                                <div className='appointment-confirm-details-item'>
                                    <i class="fas fa-money-bill"></i>
                                    <div>
                                        Your estimated copay is $25.00
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            Please enter a reason for your visit here.If you've completed filling out the rest of this form, and the other information on the page is correct, click Make Appointment to schedule your appointment.
                        </div>
                        
                        <input type="textarea" className="appointment-confirm-input" placeholder='Why do you want to be seen?' onChange={this.handleInput('notes')} />
                        
                        <div>
                            CANCELLATION POLICY: We ask that you contact us at least 24 hours before your appointment if you are unable to keep it. This will help ensure all patients have access to our care team when needed.
                        </div>
                    </div>

                    <div className='movementButtons'>
                        <Link to='appointments/time' className='back-button m-button'>
                            BACK
                        </Link>
                        <button className='forward-button m-button' onClick={this.submitForm}>
                            MAKE APPOINTMENT
                        </button>
                        <Link to='/appointments/new' className='start-over-button m-button'>
                            START OVER
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(AppointmentConfirm)