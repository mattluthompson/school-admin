import React, {Component} from 'react';
import {base} from "./config/Fire.js";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleLogIn = (e) => {
        e.preventDefault();
        base.initializedApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) =>{
        }).catch((error) =>{console.log(error);});
    }

    handleSignUp = (e) => {
        e.preventDefault();
        base.initializedApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {console.log(error)})
    }

    render() {
        return(
            <div>
                <form>
                    <h1>Log In</h1>
                        <label>
                        Username: <input name = "email" type = "text" onChange = {this.handleChange} required/>
                        </label><br /><br />
                        <label>
                        Password: <input name = "password" type = "password" onChange = {this.handleChange} required/>
                        </label><br /><br />
                </form>
                <button onClick = {this.handleLogIn}>Log In</button>
                <button onClick = {this.handleSignUp}>Sign Up</button>
            </div>
        );
    }
}

export default Login;