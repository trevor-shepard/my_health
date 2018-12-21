import React, { Component } from 'react'

import MovementButtons from './movement_buttons'
import TimeSelectItem from './time_select_item'
import {jsonToDate, parseTimeFromJson} from '../../util/date'

class TimeSelect extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.selectTime = this.selectTime.bind(this)
        this.loadNextDay = this.loadNextDay.bind(this)
    }

    componentDidMount() {
        
        this.props.fetchSlots(this.props.provider.id, this.props.start, this.props.end)
        
    }

    componentDidUpdate(oldProps) {

        if (oldProps.slots !== this.props.slots) {
            
            this.setState({day: 0})
        }
        
    }

    selectTime(time) {
        return() => {
            let previousEl = document.getElementsByClassName('selected-bar')[0]

            if (previousEl) {
                previousEl.classList.remove('selected-bar')
            }

            document.getElementById(`time-select-${time}`).className += ' selected-bar'
            
            this.setState({start_time: jsonToDate(time), error: null})

            
        }
    }

    loadNextDay() {
        console.log(this.state)
        let nextDay = this.state.day + 1
        this.setState({day: nextDay},
            () => console.log(this.state, nextDay))
        
    }



    render() {
        let days
        let date
        let slots
        let no_more
        let more_days
        

        if (this.props.slots) {
            days = Object.keys(this.props.slots)
            if (days[this.state.day]) {
                date = days[this.state.day]
                
                slots = Object.values(this.props.slots[date]).map((slot) => <TimeSelectItem 
                                time={slot.start} 
                                provider={this.props.provider}
                                selectTime={this.selectTime(slot.start)}
                                /> )
                more_days = <div className='m-button load-times-button' onClick={this.loadNextDay} >Later Times</div>
            } else {
                no_more = <div className='m-button no-times-button'>No More Days</div>
            }
            
        }

        let submitForm
        let error

        if (this.state.start_time) {

            submitForm = this.props.setTime(this.state.start_time)
            
        } else {
            submitForm = () => {
                this.setState({error: <div>
                    Please select from one of the following.
                </div>})
                
            }
        }
        


        return(
            <div>
                <h1 className='two-rem'>Schedule an Appointment</h1>
                <div className='time-select-description'>
                This page displays available appointment times for the selected provider. Select an appointment time by clicking on the appointment.

If you would like to see more appointment times, click Later Times. Click Back to change the search criteria.

Arrival times vary by clinic but in general plan on arriving at least 15 minutes before your appointment start time. Arriving early allows your care team time to prepare you for your visit. Be sure to follow any instructions provided by your clinic.
                </div>
                <div className='second-header'> {date} </div>

                <div className='time-select-contents'>
                    {slots}
                </div>
                {error}
                <div className='more-buttons'>
                    {more_days}
                    {no_more}
                </div>
                <MovementButtons back='/appointments/date' forward={submitForm} />
            </div>
        )
    }

}

export default TimeSelect