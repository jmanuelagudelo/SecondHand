import React from "react";
import '../styles/MainStyle.scss';
import '../styles/mobile.css';

import addcart from '../icons/bt_add_to_cart.svg';

const ProductInfo = () => {
    return(
        <div className="ProductInfo">
            <img src="" alt="product-image"/>
            <p>$</p>
            <p>Produc-name</p>
            <p>Descripcion</p>

            <button className="primary-button addto-cart-button">
                <img src={addcart} alt="add to cart"/>
                Add to cart
            </button>
        </div>
    );
} 

export default ProductInfo;