import React, {useRef} from "react";
import '../styles/Login.scss';
import Logo from '../logos/logo-second-hand.svg';


const Login = () => {
    const loginform = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const loginData = new FormData(loginform.current);
        const data = {
            username: loginData.get('email'),
            password: loginData.get('password')
        }
        console.log(data);
    }
    return(
        <div className  ="Login ">
            <div className ="Login-container">
                <img src={Logo} alt="logo" className ="logo"/>
                <form action="/" className ="form" ref={loginform}>
                    <label for="email" className="label">Email address</label>
                    <input type="text" name="email" placeholder="********" className="input input-email"/>

					<label for="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
                    
                    <button type="submit"className="primary-button login-button"
                    onClick={handleSubmit}>
                    Log in
                    </button>
                    <a href="/">Forgot my password</a>
                </form>

                <button className ="secondary-button sign-button bot-ton" >
                Sign up
                </button>

            </div>
        </div>
    );
}

export default Login;