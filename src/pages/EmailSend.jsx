import React from "react";
import '../styles/SendEmail.scss';
import logo from '../logos/logo-second-hand.svg'
import emailpic from '../icons/email.svg'

const EmailSend = () => {
    return(
        <div className="login">
            <div className="form-container2">
                <img src={logo} class="logo"/>

                <h1 className="tittle">Email has been sent!</h1>
                <p className="subtittle">Please check your inbox for instructions on how to reset the password</p>

                <div className="email-image">
                    <img src={emailpic} alt="email"/>
                </div>

                <input type="submit" value="Login" className="primary-button login-button" />
                <p className="resend">
                    <span>Didn't receive the email?</span>
                    <a href="/">Resend</a>
                </p>
            </div>
        </div>
    );
}



export default EmailSend