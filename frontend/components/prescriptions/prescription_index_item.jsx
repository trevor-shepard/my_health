import React from 'react'
import {jsonToDate, parseDatefromJSDateTime} from '../../util/date'

const PrescriptionIndexItem = ({med, provider, Rx, selectRx }) => {

    let prescribed_on = parseDatefromJSDateTime(jsonToDate(Rx.created_at)) 
    
    return (
        <div className='prescription-index-item'>
            <div className='rx-title'>
                <div className='square-red'> </div>
                <div className='rx-title-text'>Prescription</div>
            </div>
            
            <div className='rx-index-item-content'>
                <div className='checkbox-container'>
                    <label>
                        <input type='checkbox' onClick={selectRx} />
                    </label>
                   
                </div>
                
                <div className='rx-index-item-content-display'>
                    <div className='margin-left-five-c'>
                        <div className='rx-name'>
                            {med.generic_name} {Rx.dosage } {Rx.admin_type}
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