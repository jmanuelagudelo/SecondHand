import React from "react";
import '../styles/ProductItem.scss';
import addcart from '../icons/bt_add_to_cart.svg';

const ProductItem = () => {
	return (
		<div className="ProductItem">
			<img src="" alt="product" />
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