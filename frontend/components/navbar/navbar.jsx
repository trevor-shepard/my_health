import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logout from './logout'


class Navbar extends Component {

    showModal() {
        let modal = document.getElementById("modal")
        
        modal.classList.add("coming-soon-show")

        setTimeout(() => {
            modal.classList.remove("coming-soon-show")
        },
        1700)
    }


    render(){

        return (<div id="header">
            <div className='nav-links'>
                <Link to='/' className="nav-logo"> </Link>
                {/* <div className='nav-item'>
                    <i className="nav-icon far fa-user"></i>
                    {this.props.user.fname}
                </div>
                <div className='nav-item' onClick={this.showModal}>
                    <i className="nav-icon far fa-envelope"></i>
                    Messaging
                </div>
                <div className='nav-item'>
                    <i className="nav-icon far fa-calendar-plus"></i>
                    Visits   
                </div>
                <div className='nav-item' onClick={this.showModal}>
                    <i className="nav-icon far fa-heart"></i>
                    Health
                </div>
                <div className='nav-item' onClick={this.showModal}>
                    <i className="nav-icon far fa-credit-card"></i>
                    Billing
                </div>
                <div className='nav-item' onClick={this.showModal}>
                    <i className="nav-icon fas fa-book"></i>
                    Resources
                </div>
                <div className='nav-item' onClick={this.showModal}>
                    <i className="nav-icon fas fa-cog"></i>
                    Settings
                </div> */}
                <Logout user={this.props.user} logout={this.props.logout}  />

            </div>
        </div>
        )
    }
}

export default Navbar;