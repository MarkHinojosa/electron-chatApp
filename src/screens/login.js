import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: ""
        }
    }

    _onSubmit = () => {
        console.log(this.state);
        let userIdentification = this.state;
        axios.post('http://localhost:3001/users', userIdentification)
    }

    render() {
        return (
            <div>
                <text>Username:</text>
                <input onChange={(event)=> this.setState({userId: event.target.value})} />
                <br />
                <button onClick={()=> this._onSubmit()}>Submit</button>
            </div>
        )
    }
}

export default Login;