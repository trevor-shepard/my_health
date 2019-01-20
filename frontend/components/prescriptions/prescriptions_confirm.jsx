import React from 'react'

const PrescriptionsConfirm = ({rx, provider, med}) => {
    
    return (
        <div>
            <h1 className='two-rem'>Request Rx Refill</h1>
                    <div>
                        <div className='margin-twenty bottom-zero'>Step 2 of 2: Confirm Refill</div>
                        <div className="margin-twenty">
                            <div class="rx-name">
                                {med.brand_name} ({med.generic_name}) {rx.admin_type.replace(/\b\w/g, l => l.toUpperCase())}
                            </div>
                            <div>
                                Prescribed By {provider.fname} {provider.lname} {provider.degree}
                            </div>
                            <div>
                                Count: {rx.count}
                            </div>
                            <div>
                                Refills: {rx.refills}
                            </div>
                            <div>
                                Pharmacy on File {rx.pharmacy}
                            </div>
                            <div>
                                If any of the above information is incorrect, please contact your provider direclty
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default PrescriptionsConfirm;