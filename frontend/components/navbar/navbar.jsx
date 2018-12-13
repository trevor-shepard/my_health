import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logout from './logout'


class Navbar extends Component {
    render(){

        return (<div id="header">
            <Link to='/' className="logo"></Link>
            <div>{this.props.user.fname}</div>
            <div>Messaging</div>
            <div>Visits</div>
            <div>Health</div>
            <div>Billing</div>
            <div>Resources</div>
            <div>Settings</div>
            <Logout user={this.props.user} logout={this.props.logout}  />
        </div>
        )
    }
}

export default Navbar;