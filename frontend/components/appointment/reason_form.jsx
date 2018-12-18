import React from 'react'

const ReasonForm = ({ setReason }) => {
    
    return (
        <div >
            <div>Choose your reason for scheduling an appointment from the options below.</div>
            <div className='reason-list'>
                <div className="blue-hover reason-item" onClick={ setReason('new_problem') } >
                    <h1>New Problem</h1>
                    <div>A general visit to address a new medical concern.</div>
                </div>
                <div className="blue-hover reason-item" onClick={ setReason('follow_up')} >
                    <h1>Follow-Up</h1>
                    <div>A visit to follow up on a aspecific medical concern.</div>
                </div>
                <div className="blue-hover reason-item" onClick={ setReason('anual_wellness')}>
                    <h1>Anuall Wellness Exam/Physical</h1>
                    <div>A complete physical exam.</div>
                </div>
                <div className="blue-hover reason-item" onClick={ setReason('child')}>
                    <h1>Well Child Check</h1>
                    <div>A routine Well Child visit.</div>
                </div>
            </div>
            <dir>
                <button>BACK TO THE HOME PAGE</button>
            </dir>
        </div>
    )
}

export default ReasonForm