import React from "react";
import '../styles/ProductInfo.scss';
import imga from "../../sources/Images/IMG_2932_Large.jpeg"
import addcart from '../icons/bt_add_to_cart.svg';

const ProductInfo = () => {
    return(
        <>
            <img src={imga} alt="product-image"/>
            <div className="ProductInfo">
                <p>$</p>
                <p>Product-name</p>
                <p>Descripcion</p>

                <button className="primary-button addto-cart-button">
                    <img src={addcart} alt="add to cart"/>
                Add to cart
                </button>
            </div>
        </>
    );
} 

export default ProductInfo;