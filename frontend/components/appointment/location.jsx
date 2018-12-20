import React from 'react';
import MovementButtons from './movement_buttons'

const LocationForm = ({city, state, setLocation}) => {
    return (
        <div>
            <h1 className='two-rem'>Schedule an Appointment</h1>
            <div className='margin-twenty'>
                <div>
                    Where do you want to schedule?
                </div>
                <div>
                    {state} {city}
                </div>
                <MovementButtons back='/appointments/demographics' forward={setLocation(city)} /> 
            </div>
        </div>
    )
}

export default LocationForm