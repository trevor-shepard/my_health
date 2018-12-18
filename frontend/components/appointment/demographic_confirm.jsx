import React from 'react'
import { Link } from 'react-router-dom'

const DemographicConfirm = ({confirmDemographics, user}) => {
    return (
        <div>
            <h1>Schedule an Appointment</h1>
            <div className='demographic-content'>
                <div className='demographic-item'>
                    <div className='demographic-item-title'>Street Address:</div>
                    <div className='demographic-item-content'> {user.address}</div>
                </div>
                <div className='demographic-item'>
                    <div className='demographic-item-title'>Home Phone:</div>
                    <div className='demographic-item-content'> {user.home_phone}</div>
                </div>
                <div className='demographic-item'>
                    <div className='demographic-item-title'>City:</div>
                    <div className='demographic-item-content'> {user.city}</div>
                </div>
                <div className='demographic-item'>
                    <div className='demographic-item-title'>Mobile Phone:</div>
                    <div className='demographic-item-content'> {user.address}</div>
                </div>
                <div className='demographic-item'>
                    <div className='demographic-item-title'>State</div>
                    <div className='demographic-item-content'> {user.state}</div>
                </div>
                <div className='demographic-item'>
                    <div className='demographic-item-title'>Work Phone:</div>
                    <div className='demographic-item-content'> {user.work_phone}</div>
                </div>
                <div className='demographic-item'>
                    <div className='demographic-item-title'>Street Address</div>
                    <div className='demographic-item-content'> {user.address}</div>
                </div>
                <div className='demographic-item'>
                    <div className='demographic-item-title'>Street Address</div>
                    <div className='demographic-item-content'> {user.address}</div>
                </div>
                <div className='demographic-item'>
                    <div className='demographic-item-title'>Street Address</div>
                    <div className='demographic-item-content'> {user.address}</div>
                </div>
                <div className='demographic-item'>
                    <div className='demographic-item-title'>Street Address</div>
                    <div className='demographic-item-content'> {user.address}</div>
                </div>
            </div>

            <button onClick={confirmDemographics}>Conform Demographics</button>
            <Link to='/appointments/new'>START OVER</Link>
        </div>
    )
}

export default DemographicConfirm