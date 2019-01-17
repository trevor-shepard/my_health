import React from 'react'

const PrescriptionsConfirm = ({rx, provider, med}) => {
    
    
    return (
        <div>
            {med.generic_name} {provider.lname} {rx.count} {rx.dosage} {rx.admin_type}
        </div>
    )
}

export default PrescriptionsConfirm;