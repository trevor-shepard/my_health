import React from 'react'
import { jsonToDate, getWeekday, getMonth } from '../../util/date'

const AppointmentItem = ({ appointment, provider, clinic, action }) => {
    let reason
    if (appointment.reason === 'new_problem') {
        reason = 'Regular Office Visit'
    } else if (appointment.reason === 'follow_up') {
        reason = 'Follow Up Visit'
    } else if (appointment.reason === 'anual_wellness') {
        reason = 'Anual Wellness Visit'
    } else if (appointment.reason === 'child') {
        reason = 'Child'
    }
    
    let date = jsonToDate(appointment.start)

    
    return (
        <div key={appointment.id} className='appointment-list-item blue-hover' onClick={action}>
            <div className="greybar"> </div>
            <div className="appointment-list-item-content">
                <div> {reason} with {provider.fname} {provider.lname}, {provider.degree}</div>
                <div>{getWeekday(date.getDay().toString())} {getMonth(date.getMonth())} {date.getDate()}, {date.getFullYear()}</div>
                <div className="appointment-item-start-time">Starts at {date.getHours()}: {date.getMinutes()}</div>
            </div>
            

        </div>
    )
}

export default AppointmentItem