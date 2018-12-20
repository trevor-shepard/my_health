import React from 'react'


const ProviderSelectItem = ({provider, selectProvider, clinic}) => {
    
    return(
        <div key={`provider-${provider.id}`} id={`provider-select-${provider.id}`} className='provider-select-item' onClick={selectProvider}>
            <div  className="provider-select-item-title">{provider.lname}, {provider.fname}, {provider.degree}</div>
            <div>{clinic.name}</div>
        </div>
    )
}


export default ProviderSelectItem