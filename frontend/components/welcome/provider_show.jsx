import React from 'react'

const ProviderShow = ({provider, clinic}) => {
    let females = ["Flannigan", 'Tibbs']

    
    return (
        <div className="provider-show-container">
            <div className={females.includes(provider.lname) ? "female-provider-image" : "male-provider-image"} />
            <div className="provider-demographics">
                <div>{provider.fname} {provider.lname}, {provider.degree}</div>
                <div>{clinic.name}</div>
                <div>{clinic.phone}</div>
            </div>
        </div>
    )
}

export default ProviderShow