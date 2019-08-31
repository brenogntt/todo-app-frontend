import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props);

        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
    }

    render() {
        return (
            <>
                <h1>Welcome</h1>
                <div className="welcomeComponent">
                    Welcome {this.props.match.params.name}. You can manage your todos <Link to='/todos'>here</Link>.
            </div>

                <div className="welcomeComponent">
                    Click here to get a customized message.
                <button className="btn btn-success" onClick={this.retrieveWelcomeMessage}>Get Welcome Message</button>
                </div>
            </>
        )
    }


    retrieveWelcomeMessage() {
        console.log('retrieve');
        HelloWorldService.executeHelloWorldService()
        .then(response => console.log(response))
        //.catch()
    }
}

export default WelcomeComponent