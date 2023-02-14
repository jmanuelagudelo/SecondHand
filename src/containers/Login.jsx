import React from "react";
import '../styles/MainStyle.scss';
import '../styles/mobile.css';
import logo from '../logos/logo-second-hand.svg';


const Login = () => {
    return(
        <div className  ="login">
            <div className ="form-container">
                <img src={logo} alt="logo" className ="logo"/>

                <form action="/" className ="form">
                    <label for="text" className="label">Email Address</label>
					<input type="password" id="password" placeholder="name@example.com" className="input input-password" />

					<label for="new-password" className="label">Password</label>
					<input type="password" id="new-password" placeholder="*********" className="input input-password" />
                    
					<input type="submit" value="Confirm" className="primary-button login-button" />
                </form>

                <button className ="secundary-button sign-button bot-ton">Sign up</button>

            </div>
        </div>
    );
}

export default Login;