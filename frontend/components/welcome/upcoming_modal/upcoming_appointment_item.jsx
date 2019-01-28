import React from 'react'

import ProviderShow from '../provider_show'

import { jsonToDate, getWeekday, getMonth } from '../../../util/date'

const AppointmentItem = ({ appointment, provider, clinic }) => {
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
        <div key={appointment.id} className='upcoming-appointment-list-item'>
            <div className="upcoming-appointment-list-item-title"> {reason} at {date.getHours()}: {date.getMinutes()}</div>
            <div>{getWeekday(date.getDay().toString())} {getMonth(date.getMonth())} {date.getDate()}, {date.getFullYear()}</div>
            <ProviderShow provider={provider} clinic={clinic} />
        </div>
    )
}

export default AppointmentItem