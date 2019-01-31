import React, { Component } from 'react';
import './Form.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
        this.Password = this.Password.bind(this);
        this.Username = this.Username.bind(this);
        this.Checking = this.Checking.bind(this);
    }
    Username(add) {
        this.setState({
            username: add.target.value
        });
    }
    Password(pass) {
        this.setState({
            password: pass.target.value
        })
    }
    Checking() {
        const { username, password } = this.state;
        this.props.Login(username, password);
    }
    render() {
        const { username, password } = this.state;
        return (
                <div className="Form">
                <label>Login Form</label>
                <div className="gr form-group">
                 <label className="label">Email address</label>
                 <input onBlur={this.Username} type="email" class="in form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                 </div>
                <div class="gr form-group">
                <label className="label">Password</label>
                <input onBlur={this.Password} type="password" class="in form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button onClick={this.Checking} type="submit" className="btn btn-primary">submit</button>
                </div>
        );
    }
}
export default Login;