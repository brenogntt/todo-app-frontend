import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: 'breno.gianotto',
            password: '',
            hasLoginSucceed: false,
            hasLoginFailed: false
        }

        //this.handlerUsernameChange = this.handlerUsernameChange.bind(this)
        //this.handlerPasswordChange = this.handlerPasswordChange.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    render() {
        return (
            <>
                <h1>Login</h1>
                <div className="container">
                    {/*<CheckLoginSucceed hasLoginSucceed={this.state.hasLoginSucceed} />*/}
                    {/*<CheckLoginFailed hasLoginFailed={this.state.hasLoginFailed} />*/}
                    {this.state.hasLoginSucceed && <div>Login Successful</div>} {/* lil JavaScript trick - if left side is true, right side will be shown */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Login Failed</div>}
                    User name: <input type="text" name="username" value={this.state.username} onChange={this.handlerChange} /> {/*Binding the form with the state of the component*/}
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handlerChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </>
        )
    }

    loginClicked() {
        //if (this.state.username === 'breno.gianotto' && this.state.password === '12345') {
            //AuthenticationService.registerSuccessfullLogin(this.state.username, this.state.password);
            //this.props.history.push(`/welcome/${this.state.username}`)
                //this.setState({
            //hasLoginSucceed: true,
            //hasLoginFailed:false
            //})
        //} else {
            //this.setState({
                //hasLoginSucceed: false,
                //hasLoginFailed: true
            //})
        //}

        AuthenticationService
        .executeBasicAuthenticationService(this.state.username, this.state.password)
        .then(() => {
                AuthenticationService.registerSuccessfullLogin(this.state.username, this.state.password);
                this.props.history.push(`/welcome/${this.state.username}`)
            })
        .catch(()=>{
            this.setState({
                hasLoginSucceed: false,
                hasLoginFailed: true
            })
        })
    }

    handlerChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // handlerUsernameChange(event){
    //     this.setState({
    //         username: event.target.value
    //     })
    //     console.log(this.state.username)
    // }

    // handlerPasswordChange(event){
    //     this.setState({
    //         password: event.target.value
    //     })
    //     console.log(this.state.password)
    // }
}

/*function CheckLoginSucceed(props) {
    if (props.hasLoginSucceed) {
        return <div>Login Successful</div>
    } else {
        return null
    }
}

function CheckLoginFailed(props) {
    if (props.hasLoginFailed) {
        return <div>Login Failed</div>
    } else {
        return null
    }
}*/

export default LoginComponent 