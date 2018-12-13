import React, { Component } from 'react'

import { Link } from 'react-router-dom'


class SessionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.login(user);
    }

    demoLogin(e) {
        e.preventDefault();
        const demouser = {
            username: 'tshepard',
            password: 'password'
        }
        this.props.login(demouser)
    }

    handleInput(field) {
        return (e) => this.setState({[field]: e.target.value})
    }

    render() {
        let error;
        if (this.props.errors.length) {
                                                                                // TODO: add warn image
            error = <div>
                        <div className='alert-card'> </div>
                        <div>Login Unsuccessful</div>
                    </div>
        } else {
            error = <div> </div>
        }

        return (
            <div className='form-container'>
                <div className="language">
                    <Link to='/'>Español</Link>
                </div>
                <div className="error-container">
                    { error }
                </div>
                <form onSubmit={this.handleSubmit} className='login-form'>
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
                    <label>
                        MyHealth Username
                        <input type="text" onChange={this.handleInput('username')} />
                    </label>
                    <label>
                        Password
                        <br></br>
                        <input type="password" onChange={this.handleInput('password')} />
                    </label>
                    <div className='login-button sign-in-button'>
                        <button>SIGN IN</button>
                    </div>
                    <div className="forgot-cred">
                        <a>Forgot Username?</a>
                        <a>Forgot Password?</a>
                    </div>
                    
                </form>
                <h1>New User?</h1>
                <div className='login-button sign-up-button'>
                    <button>SIGN UP</button>
                </div>
                <h1>Demo Login</h1>
                <div className='login-button sign-in-button'>
                    <button onClick={this.demoLogin}>WELCOME</button>
                </div>
            </div>
        )
    }

}

export default SessionForm;