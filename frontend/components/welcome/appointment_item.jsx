import React from 'react'
import { jsonToDate, getWeekday, getMonth } from '../../util/date'

const AppointmentItem = ({ appointment, provider }) => {
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
        <div className='appointment-list-item blue-hover'>
            <div> {reason} with {provider.fname} {provider.lname}, </div>
            <div>{provider.degree}</div>
            <div>{getWeekday(date.getDay().toString())} {getMonth(date.getMonth())} {date.getDate()}, {date.getFullYear()}</div>
            <div>Starts at {date.getHours()}: {date.getMinutes()}</div>

        </div>
    )
}

export default AppointmentItem