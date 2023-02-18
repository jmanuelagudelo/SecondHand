import React from "react";
import '../styles/MainStyle.scss';
import '../styles/mobile.css'
import iconclose  from '../icons/icon_close.png';

const ProductDetail = () => {
	return (
		<aside id="productDetail" className="inactive mobileDetail product-det">
			<div className="ProductDetail-close">
				<img src={iconclose} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;