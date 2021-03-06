import React, { Component, PropTypes } from 'react';
import ReactDOM from "react-dom";
import axios from "axios";

// ----------------------------------------------------
const loginMessageStyle = {
	color: "red"
}

// ----------------------------------------------------
class Login extends Component {

	constructor() {
		super();

		this.state = {
			loginMessage: ""
		}
	}

	_onLoginSubmit = (event) => {		
		event.preventDefault();
		const email = ReactDOM.findDOMNode(this.refs.email).value;
		const password = ReactDOM.findDOMNode(this.refs.password).value;
		const avatar = 'test';
		// Passed in via react-redux. Returns a promise.
		this.props.manualLogin({ // this function is passed in via react-redux
			email,
			password,
			avatar
		}, this.props.nextPathname) // holds the path to redirect to after login (if any)
		.then((loginMessage) => {
			if (loginMessage) {
				// report to the user is there was a problem during login
				this.setState({
					loginMessage
				})			
			}	
		})
	}

	render() {
		return(
			<div className="login">
				<h2>Log in</h2>
				<p>DEMO: To use without registering: <br />
					<b>email:</b> letsplayapp123+janedoe@gmail.com <br />
					<b>password:</b> test
				</p>
				<form onSubmit={this._onLoginSubmit}>
					<input type="email" ref="email" placeholder="Email"/><br/>
					<input ref="password" type="password" placeholder="Password" /><br/>
					<input className="box-shadow login-submit" type="submit" value="Login" /> <p style={loginMessageStyle}>{ this.state.loginMessage }</p>
				</form>	
			</div>	
		)
	}
}

export default Login;