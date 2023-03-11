import React, { useContext }  from "react";
import '../styles/OrderItem.scss';
import iconclose  from '../icons/icon_close.png';
import Appcontext from "../context/AppContext";

const OrderItem = ({product}) => {

    const {removeFromCart} = useContext(Appcontext);

    const handdleRemove = product => {
        removeFromCart(product);
    }

    return(
        <div className="OrderItem">
            <figure>
                <img src={product.image} alt={product.title}/>
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <img src={iconclose} alt="close" onClick={() => handdleRemove(product)}/>
        </div>
    );
}

export default OrderItem;