import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import ReasonForm from './reason_form'


class AppointmentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_id: props.user.id,
            provider_id: null,
            start: null,
            end: null,
            notes: null,
            reason: null
        }

        this.setReason = this.setReason.bind(this)
    }

    setReason(reason) {
        return (e) => {
            this.setState(
                {reason: reason}, 
                () => {
                    this.props.history.push('/appointment/workd')
                }
                )
            
        }
    }

    render() {
        return (
            <div className='content-container'>
                <div className='content'>
                    <HashRouter>
                        <Switch>
                            <Route path='/appointments/new' component={() => <ReasonForm  setReason={this.setReason} />}/>
                            <Route path='/appointments/demographics' component={() => <ReasonForm  setReason={this.setReason} />}/>
                        </Switch>
                    </HashRouter>
                    
                </div>
                <div className='sidebar'>

                </div>
            </div>
        )
    }
}

export default AppointmentForm