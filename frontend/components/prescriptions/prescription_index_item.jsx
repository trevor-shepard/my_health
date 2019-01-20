import React from 'react'
import {jsonToDate, parseDatefromJSDateTime} from '../../util/date'

const PrescriptionIndexItem = ({med, provider, Rx, selectRx, selectedID }) => {

    let prescribed_on = parseDatefromJSDateTime(jsonToDate(Rx.created_at))

    let checkbox

    let pending

    if (Rx.request_pending) {
        checkbox = <input type='checkbox' disabled />     
        
        pending = <span>Refill Request Pending</span>
    } else {
        checkbox = <input type='checkbox' onClick={selectRx} checked={selectedID === Rx.id ? true : false} />
    }
    
    return (
        <div className='prescription-index-item'>
            <div className='rx-title'>
                <div className='square-red'> </div>
                <div className='rx-title-text'>Prescription</div>
            </div>
            
            <div className='rx-index-item-content'>
                <div className='checkbox-container'>
                    <label>
                        {checkbox}
                    </label>
                   
                </div>
                
                <div className='rx-index-item-content-display'>
                    <div className='margin-left-five-c'>
                        <div className='rx-name'>
                            {med.generic_name} {Rx.dosage } {Rx.admin_type} {pending}
                        </div>
                        <div className='rx-brand-name'>
                            Commonly known as: {med.brand_name}
                        </div>
                        <div className='rx-approved-by'>
                            Approved by {provider.fname} {provider.lname} {provider.degree} on {prescribed_on}
                        </div>
                    </div>
                    

                </div>

            </div>
            
        </div>
    )
}

export default PrescriptionIndexItem