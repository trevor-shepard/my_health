import React from 'react'
import {parseTimeFromJson} from '../../util/date'

const TimeSelectItem = ({time, provider, clinic, selectTime}) => {
    
    return(
        <div id={`time-select-${time}`} className='time-select-item blue-hover' onClick={selectTime}>
            <div>
                {parseTimeFromJson(time)}
            </div>
            <div>
                <div  className="time-select-item-title">{provider.lname}, {provider.fname}, {provider.degree}</div>
                

            </div>
        </div>
    )
}

export default TimeSelectItem 