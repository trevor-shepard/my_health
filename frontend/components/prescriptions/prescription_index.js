import React, { Component } from 'react'
import PrescriptionIndexItem  from './prescription_index_item'


class PrescriptionIndex extends Component {
    
    render() {
        let prescriptions
        if (this.props.prescriptions) {
            
            prescriptions = Object.values(this.props.prescriptions).map(
                (el) => (
                    <PrescriptionIndexItem 
                    med={this.props.medications[el.medication_id]}
                    provider={this.props.providers[el.provider_id]}
                    Rx={el}
                    selectRx={this.props.selectRx(el.id)}
                    selectedID={this.props.selectedID}
                    />
                )
            )
            
        }

        return(
                <div>
                    <h1 className='two-rem'>Request Rx Refill</h1>
                    <div>
                        <div className='margin-twenty bottom-zero'>Step 1 of 2: Choose prescriptions to refill</div>
                        <form className='rx-list-container margin-twenty'>
                            
                            <div className='rx-list'>
                                {prescriptions}
                            </div>
                        </form>
                    </div>

                   
                    
                </div>
           
        )
    }
}

export default PrescriptionIndex