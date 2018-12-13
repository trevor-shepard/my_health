import React, { Component } from 'react'


class SessionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.login(user);
    }

    handleInput(field) {
        return (e) => this.setState({[field]: e.target.value})
    }

    render() {
        let error
        if (this.props.errors.length) {
                                                                                                // TODO: add warn image
            error = <span className='alert card'>Login unsuccessful</span>
        }

        return (
            <div>
                { error }
                <form onSubmit={this.handleSubmit}>
                    <input type="hidden" name=""/>
                    <p>Select the area where you receive care</p>
                    <select>
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
                        MyChart Username
                        <input type="text" onChange={this.handleInput('username')} />
                    </label>
                    <label>
                        Password
                        <input type="password" onChange={this.handleInput('password')} />
                    </label>
                    <button>SIGN IN</button>
                </form>
            </div>
        )
    }

}

export default SessionForm;