import React, { Component } from 'react'

import { Link } from 'react-router-dom'


class SessionForm extends Component {
    constructor(props) {
        super(props);
        

        if (this.props.formType === 'SIGN UP') {
            this.state = {
                username: '',
                password: '',
                fname: '',
                lname: '',
                dob: null
            }
        } else {
            this.state = {
                username: '',
                password: ''
            };
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSelect = this.handleSelect.bind(this)
        this.demoLogin = this.demoLogin.bind(this);
        this.errorsClear = this.errorsClear.bind(this);


    }

    errorsClear() {
        this.props.clearErrors()
    } 

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.formSubmit(user);
    }

    demoLogin(e) {
        e.preventDefault();
        const demoUser = {
            username: 'tshepard',
            password: 'password'
        }
        this.props.login(demoUser)
    }

    handleInput(field) {
        return (e) => {
            if (e.target.value.length) {
                let title = e.target.parentElement.children[0]
                title.classList.add('splash-input-title-selected')
            } else {
                e.target.parentElement.children[0].classList.remove('splash-input-title-selected')
            }
            
            this.setState({[field]: e.target.value})
        }
    }

    handleSelect(e) {
        let title = e.target.parentElement.children[0]
        title.classList.add('splash-input-title-selected')
    }

    render() {
        //TODO - Custom error display
        // conditional rendering ~ error
        let error;
        if (this.props.errors.length) {
            error = <div>
                        <div className='alert-card'> </div>
                        
                        <div> {this.props.errors[0]} </div>
                    </div>
        } else {
            error = <div> </div>
        }

        //conditional rendering ~ form
        let dob
        let fname
        let lname
        let other
        if (this.props.formType === 'SIGN UP') {
            dob = (
                <label className='splash-input-label'>
                    <div className='splash-input-title'>
                        Date of Birth
                    </div>
                    <input type="date" placeholder='' onChange={this.handleInput('dob')} onSelect={this.handleSelect}/>
                </label>
            )
            fname = (
                <label className='splash-input-label'>
                    <div className='splash-input-title'>
                        First Name
                    </div>
                    <br/>
                    <input type="input" onChange={this.handleInput('fname')} onSelect={this.handleSelect} />
                </label>
            )
            lname = (
                <label className='splash-input-label'>
                    <div className='splash-input-title'>
                        Last Name
                    </div>
                    <br/>
                    <input type="input" onChange={this.handleInput('lname')} onSelect={this.handleSelect} />
                </label>
            )
            other = (
                <div>
                    <h1>Already a User?</h1>
                    <div className='login-button sign-up-button' onClick={this.errorsClear} >
                        <Link to="/login" className="other" >LOGIN</Link>
                    </div>

                </div>
            )

        } else {
            other = (
                <div>
                    <h1>New User?</h1>
                    <div className='login-button sign-up-button other' onClick={this.errorsClear} >
                        <Link to="/signup" className="other" >SIGN UP</Link>
                    </div>

                </div>
                
            )
        }

        return (
            <div className='form-container'>
                <div className="language">
                    <Link className="espanol" to='/'>Español</Link>
                </div>
                <div className="error-container">
                    { error }
                </div>
                <form onSubmit={this.handleSubmit} className='login-form'>
                    
                    {/* core */}
                    <div>
                        <p>Select the area where you receive care</p>
                    </div>
                    <select className='login-form-select'>
                        <option>California, Oregon and SW Washington</option>
                        <option>Alaska</option>
                        <option>California</option>
                        <option>Montana</option>
                        <option>Northeast Oregon - Wallowa</option>
                        <option>Oregon</option>
                        <option>SW Washington (Clark & Cowlitz Counties)</option>
                        <option>Washington (excluding Clark & Cowlitz Counties)</option>
                    </select>
                    <br/>

                    <label className='splash-input-label'>
                        <div className='splash-input-title'>MyChart Username</div>
                        <input type="text"  onChange={this.handleInput('username')} onClick={this.handleSelect}/>
                    </label>

                    <label className='splash-input-label'>
                        <div className='splash-input-title'>Password</div>
                        
                        <input type="password"  onChange={this.handleInput('password')} onClick={this.handleSelect} />
                    </label>

                    { fname }
                    { lname }
                    { dob }


                    <div className='login-button sign-in-button'>
                        <button>{this.props.formType}</button>
                    </div>
                    
                </form>
                    <div className="forgot-cred">
                        <a>Forgot Username?</a>
                        <a>Forgot Password?</a>
                    </div>
                

                
                { other }



                <div className='login-button sign-in-button'>
                    <button onClick={this.demoLogin}>DEMO LOGIN</button>
                </div>
            </div>
        )
    }

}

export default SessionForm;