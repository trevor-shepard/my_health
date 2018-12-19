import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Checkbox from './checkbox'

class DemographicConfirm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            confirmed: false
        }
        this.toggleConfirmed = this.toggleConfirmed.bind(this)
    }
    
    toggleConfirmed() {
        if (this.state.confirmed === true) {
            this.setState({confirmed: false},
                () => console.log(this.state))

        } else {
            this.setState({confirmed: true},
                () => console.log(this.state))
            
        }
        
    }    
    
    render() {
        let confirm_button
        if (this.state.confirmed === false) {
            confirm_button = <div className='unselected'>CONTINUE</div>
        } else {
            confirm_button = <div className='selected' onClick={this.props.confirmDemographics}>CONTINUE</div>
        }

        return (
            <div>
                <h1 className="two-rem">Schedule an Appointment</h1>
                <div className='demographic-content'>
                    <div className='demographic-item'>
                        <div className='demographic-item-title'>Street Address:</div>
                        <div className='demographic-item-content'> {this.props.user.address}</div>
                    </div>
                    <div className='demographic-item'>
                        <div className='demographic-item-title'>Home Phone:</div>
                        <div className='demographic-item-content'> {this.props.user.home_phone}</div>
                    </div>
                    <div className='demographic-item'>
                        <div className='demographic-item-title'>City:</div>
                        <div className='demographic-item-content'> {this.props.user.city}</div>
                    </div>
                    <div className='demographic-item'>
                        <div className='demographic-item-title'>Mobile Phone:</div>
                        <div className='demographic-item-content'> {this.props.user.address}</div>
                    </div>
                    <div className='demographic-item'>
                        <div className='demographic-item-title'>State</div>
                        <div className='demographic-item-content'> {this.props.user.state}</div>
                    </div>
                    <div className='demographic-item'>
                        <div className='demographic-item-title'>Work Phone:</div>
                        <div className='demographic-item-content'> {this.props.user.work_phone}</div>
                    </div>
                    <div className='demographic-item'>
                        <div className='demographic-item-title'>Zip Code:</div>
                        <div className='demographic-item-content'> {this.props.user.zip}</div>
                    </div>
                    <div className='demographic-item'>
                        <div className='demographic-item-title'>Preferred Phone:</div>
                        <div className='demographic-item-content'> {this.props.user.preferred_phone}</div>
                    </div>
                    <div className='demographic-item'>
                        <div className='demographic-item-title'>County</div>
                        <div className='demographic-item-content'> {this.props.user.county}</div>
                    </div>
                    <div className='demographic-item'>
                        <div className='demographic-item-title'>Email</div>
                        <div className='demographic-item-content'> {this.props.user.email}</div>
                    </div>
                    <div className='demographic-item'>
                        <div className='demographic-item-title'>Country</div>
                        <div className='demographic-item-content'> {this.props.user.country}</div>
                    </div>
                </div>
                    <Checkbox handleCheckboxChange={this.toggleConfirmed} label='This information is correct' ></Checkbox>
                <div className='demographic-confirm-button-container'>
                    { confirm_button }
                    <Link to='/appointments/new'>START OVER</Link>

                </div>
            </div>
        )

    }
}

export default DemographicConfirm