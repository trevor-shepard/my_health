import React from 'react'
import AppointmentItem from "./upcoming_appointment_item"

const MonthDisplay = ({appts, providers, title}) => {
    let apptDivs = appts.map(appt => <AppointmentItem appointment={appt} provider={providers[appt.provider_id]} />)

    return (
        <div key={title} className="upcoming-month-container">
            <div className="upcoming-month-title">
                {title}
            </div>
            <div className="upcoming-appointment-list">
                {apptDivs}
            </div>
        </div>
    )
    
}

export default MonthDisplay;