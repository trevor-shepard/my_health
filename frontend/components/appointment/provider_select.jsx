import React from 'react'

import ProviderSelectItem from './provider_select_item'
import MovementButtons from './movement_buttons'

class ProviderSelect extends React.Component{
    constructor(props){
        super(props)
        this.state = {error: null}

        this.selectProvider = this.selectProvider.bind(this)
    }

    selectProvider(provider_id) {
        return () => {
            let previousEl = document.getElementsByClassName('selected-bar')[0]
            
            if (previousEl) {
                previousEl.classList.remove('selected-bar')
            }
            
            document.getElementById(`provider-select-${provider_id}`).className += ' selected-bar'
            
            this.setState({selected_provider: provider_id, error: null},
                () => console.log(this.state))    
        }
        
    }


    render() {
        let submitForm
        let selectedClass

        if (this.state.selected_provider) {
            selectedClass= '.selected-bar'
            submitForm = this.props.setProvider(this.state.selected_provider)
            
        } else {
            submitForm = () => {
                this.setState({error: <div>
                    Please select from one of the following.
                </div>})
                
            }
        }
        let provider_shows = Object.values(this.props.providers).map((provider) => <ProviderSelectItem 
                                                                    provider={provider}
                                                                    selectProvider={this.selectProvider(provider.id)} 
                                                                    clinic={this.props.clinics[provider.primary_clinic_id]} 
                                                                    selectedClass={selectedClass}
                                                                    />)
        
        return(
            <div>
                <h1 className='two-rem'>Schedule an Appointment</h1>
                { this.state.error }
                <div className='margin-twenty'>
                    {provider_shows}
                </div>
                <MovementButtons back='/appointments/location' forward={submitForm} />

            </div>

        )
    }
} 
export default ProviderSelect