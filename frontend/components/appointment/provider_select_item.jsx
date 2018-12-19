import React from 'react'


const ProviderSelectItem = ({provider, setProvider, clinic}) => {
    return(
        <div class='provider-select-item' onClick={setProvider(provider.id)}>
            <div>{provider.lname}, {provider.fname}, {provider.degree}</div>
            <div>{clinic.name}</div>
        </div>
    )
}


export default ProviderSelectItem