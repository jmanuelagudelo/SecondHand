import React from "react";
import '../styles/ProductDetail.scss';
import ProductInfo from "../components/ProductInfo";
import iconclose  from '../icons/icon_close.png';

const ProductDetail = () => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={iconclose} alt="close" />
			</div>
			<ProductInfo/>
		</aside>
	);
}

export default ProductDetail;