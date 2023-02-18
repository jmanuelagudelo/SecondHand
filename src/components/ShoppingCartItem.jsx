import React from "react";
import '../styles/MainStyle.scss';
import '../styles/mobile.css';

const ShoppingCartItem = () => {
	return (
		<div className="ShoppingCartItem">
			<figure>
				<img src="" alt="product" />
			</figure>
			<p>Product-name</p>
			<p>$</p>
		</div>
	);
}

export default ShoppingCartItem;