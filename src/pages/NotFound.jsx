import React from "react";
import '../styles/NotFound.scss';
import img404 from '../logos/404Img.png'


const NotFound = () => {
    return(
        <div className="login">
            <div className="form-container gobackdiv">
                <img src={img404} className="pri-logo"/>

                <h1 className="tittle">
                    Sorry, we can't found what you're looking
                </h1>
                <p className="subtittlep">
                    <span >
                        Please check your address.
                    </span>
                </p>
                <a className="goback" href="/">
                        Go Back
                </a>
            </div>
        </div>
    );
}

export default NotFound