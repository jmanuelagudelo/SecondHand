import React from "react";
import '../styles/OrderItem.scss';
import iconclose  from '../icons/icon_close.png';
import imga from "../../sources/Images/IMG_2932_Large.jpeg"

const OrderItem = () => {
    return(
        <div className="OrderItem">
            <figure>
                <img src={imga} alt="product"/>
            </figure>
            <p>name</p>
            <p>$</p>
            <img src={iconclose} alt="close"/>
        </div>
    );
}

export default OrderItem;