import React from 'react'
import LoginFormContainer from './session_container'
import { Link } from 'react-router-dom'

export default () => (
    <div className="splash-body">
        <div className="splash-content">
            <div className='splash-pitch-display'>
                <div className="logo-container">
                     <div className="logo"> </div> 
                </div>
                <div>
                    {/* Link to location pages */}
                    <Link to='/'>Not from these areas?</Link>
                </div>
                <div className='splash-list-row splash-row-one'>
                    <div className='splash-list-item'>
                        <i className="far fa-comments splash-icon"></i>
                        <div className="splash-list-text">
                            <h2>Communicate with your doctor</h2>
                            <span className="info">
                                    Get answers to your medical questions from the comfort of your home
                            </span>
                        </div>
                    </div>
                    <div className='splash-list-item'>
                        <i className="fas fa-poll-h splash-icon"></i>
                        <div className="splash-list-text">
                            <h2>Access your test results</h2>
                            <span className="info">
                                No more waiting for a phone call or letter – view your results and your doctor's comments within days
                            </span>
                        </div>
                    </div>
                </div>
                <div className='splash-list-row'>
                    <div className='splash-list-item'>
                        <i className="fas fa-pills splash-icon"></i>
                        <div className="splash-list-text">
                            <h2>Request prescription refills</h2>
                            <span className="info">
                                Send a refill request for any of your refillable medications
                            </span>
                        </div>
                    </div>
                    <div className='splash-list-item'>
                        <i className="fas fa-calendar-day splash-icon"></i>
                        <div className="splash-list-text">
                            <h2>Manage your appointments</h2>
                            <span className="info">
                                Schedule your next appointment, or view details of your past and upcoming appointments
                            </span>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="splash-sidebar">
                <LoginFormContainer />
            </div>

        </div>
    </div>
)