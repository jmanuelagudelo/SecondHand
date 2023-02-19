import React from "react";
import '../styles/ShoppingCartItem.scss';

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