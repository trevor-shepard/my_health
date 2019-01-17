import React, { Component } from 'react';
import { Switch, HashRouter, Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import PrescriptionIndex from './prescription_index'
import PrescriptionsConfirm from './prescriptions_confirm'

class PrescriptionForm extends Component {
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

        let continue_button
        
        if (this.state.confirm) {
            continue_button = <button className='m-button'>CONFIRM</button>
        } if (this.state.rxID) {
            continue_button = <Link to="/prescriptions/confirm" className='m-button'>CONTINUE</Link>
        } else {
            continue_button = <button className='m-button disabled'>CONTINUE</button>
        }


        return(
            <div className='content-container'>
                <div className='content'>
                    <HashRouter>
                        <Switch>
                            <ProtectedRoute exact path='/prescriptions/confirm' component={() =>(
                                <PrescriptionsConfirm 
                                    rx={this.props.prescriptions[this.state.rxID]}
                                    provider={this.props.providers[this.props.prescriptions[this.state.rxID].provider_id]}
                                    med={this.props.medications[this.props.prescriptions[this.state.rxID].medication_id]}
                                />)}
                            />
                            <ProtectedRoute path='/prescriptions' component={() =>(
                                <PrescriptionIndex
                                    prescriptions={this.props.prescriptions}
                                    medications={this.props.medications}
                                    providers={this.props.providers}
                                    selectRx={this.selectRx}
                                    selectedID={this.state.rxID}
                                />)} 
                            />
                        </Switch>
                    </HashRouter>
                    <div>
                        {continue_button}
                    </div>              
                </div>
                <div className='sidebar'>

                </div>
            </div>
        )
    }
}

export default PrescriptionForm