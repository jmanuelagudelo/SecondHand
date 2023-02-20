import React from "react";
import '../styles/Login.scss';
import Logo from '../logos/logo-second-hand.svg';


const Login = () => {
    return(
        <div className  ="Login ">
            <div className ="Login-container">
                <img src={Logo} alt="logo" className ="logo"/>
                <form action="/" className ="form">
                    <label for="email" className="label">Email address</label>
                    <input type="text" id="email" placeholder="********" className="input input-email"/>

					<label for="password" className="label">Password</label>
					<input type="password" id="password" placeholder="*********" className="input input-password" />
                    
                    <input type="submit" value="Log in" className="primary-button login-button" />
                    <a href="/">Forgot my password</a>
                </form>

                <button className ="secondary-button sign-button bot-ton">Sign up</button>

            </div>
        </div>
    );
}

export default Login;