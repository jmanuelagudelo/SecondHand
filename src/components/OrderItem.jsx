import React from "react";
import '../styles/MainStyle.scss';
import '../styles/mobile.css';
import iconclose  from '../icons/icon_close.png';

const OrderItem = () => {
    return(
        <div className="OrderItem">
            <figure>
                <img src="" alt="product"/>
            </figure>
            <p>name</p>
            <p>$</p>
            <img src={iconclose} alt="close"/>
        </div>
    );
}

export default OrderItem;