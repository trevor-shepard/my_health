import React, { Component } from 'react'
import PrescriptionIndexItem  from './prescription_index_item'
import { format } from 'util';


class PrescriptionIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
        this.selectRx = this.selectRx.bind(this)
    }

    componentDidMount() {
        this.props.fetchMedications()
        .then(() => {
            this.props.fetchPrescriptions()
            .then(
                () => {
                    this.setState({
                        loaded: true
                    })
                }
            )
        })
    }

    selectRx(rxID) {
        
        return (e) => {
            e.preventDefault
            this.setState({rxID: rxID})

            let inputs = document.querySelectorAll('input')
            inputs.forEach((el) => {el.checked= false})
            e.target.checked = true
        }

    }
    
    
    render() {

        let prescriptions
        if (this.state.loaded) {
            
            prescriptions = Object.values(this.props.prescriptions).map(
                (el) => (
                    <PrescriptionIndexItem 
                    med={this.props.medications[el.medication_id]}
                    provider={this.props.providers[el.provider_id]}
                    Rx={el}
                    selectRx={this.selectRx(el.id)}
                    />
                )
            )
            
        }

        let continue_button
        if (this.state.rxID) {
            continue_button = <button className='m-button'>CONTINUE</button>
        } else {
            continue_button = <button className='m-button disabled'>CONTINUE</button>
        }


        return(
            <div className='content-container'>
                <div className='content'>
                    <h1 className='two-rem'>Request Rx Refill</h1>
                    <div>
                        <div className='margin-twenty bottom-zero'>Step 1 of 2: Choose prescriptions to refill</div>
                        <form className='rx-list-container margin-twenty'>
                            
                            <div className='rx-list'>
                                {prescriptions}
                            </div>
                        </form>
                        <div>
                            {continue_button}
                            <button className="cancel-button">
                                CANCEL
                            </button>
                        </div>
                    </div>
                    
                </div>
                <div className='sidebar'>

                </div>
            </div>
        )
    }
}

export default PrescriptionIndex