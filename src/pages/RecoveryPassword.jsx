import React from "react";
import '../styles/PasswordRecovery.scss';
import logo from '../logos/logo-second-hand.svg';


const RecoveryPassword = () => {
    return(
        <div className  ="PasswordRecovery">
            <div className ="PasswordRecovery-container">
                <img src={logo} alt="logo" className ="logo"/>

                <h1 className="title">Create a new password</h1>
				<p className="subtitle">Enter a new password for your account</p>

                <form action="/" className ="form">
                    <label for="password" className="label">New Password</label>
					<input type="password" id="password" placeholder="*********" className="input input-password" />

					<label for="new-password" className="label">Repeat Password</label>
					<input type="password" id="new-password" placeholder="*********" className="input input-password" />

					<input type="submit" value="Confirm" className="primary-button login-button" />
                </form>

                <button className ="secondary-button sign-button bot-ton">Sign up</button>

            </div>
        </div>
    );
}
export default RecoveryPassword