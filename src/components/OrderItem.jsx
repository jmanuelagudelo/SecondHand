import React, { useContext }  from "react";
import '../styles/OrderItem.scss';
import iconclose  from '../icons/icon_close.png';
import Appcontext from "../context/AppContext";

const OrderItem = ({product, indexValue}) => {

    const {removeFromCart} = useContext(Appcontext);

    const handdleRemove = index => {
        removeFromCart(index);
    }

    return(
        <div className="OrderItem">
            <figure>
                <img src={product.image} alt={product.title}/>
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <img src={iconclose} alt="close" onClick={() => handdleRemove(indexValue)}/>
        </div>
    );
}

export default OrderItem;