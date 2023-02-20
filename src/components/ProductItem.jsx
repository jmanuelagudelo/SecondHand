import React from "react";
import '../styles/ProductItem.scss';
import addcart from '../icons/bt_add_to_cart.svg';
import Ima from '../../sources/Images/IMG_2932_Large.jpeg'

const ProductItem = () => {
	return (
		<div className="ProductItem">
			<img src={Ima} alt="product" />
			<div className="product-info">
				<div>
					<p>$</p>
					<p>product</p>
				</div>
				<figure>
					<img src={addcart} alt="buy" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;