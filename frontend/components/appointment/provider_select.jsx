import React from 'react'

import ProviderSelectItem from './provider_select_item'

const ProviderSelect = ({setProvider, providers, clinics}) => {

    provider_shows = Object.values(providers).map((provider) => <ProviderSelectItem 
                                                                    provider={provider}
                                                                    setProvider={setProvider} 
                                                                    clinic={clinics[provider.primary_clinic_id]} 
                                                                    />)
    return(
        <div>
            <h1 className='two-rem'>Schedule an Appointment</h1>
            <div className='margin-twenty'>

            </div>
        </div>
    )
}

export default ProviderSelect