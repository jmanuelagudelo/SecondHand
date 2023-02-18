import React from "react";
import '../styles/MainStyle.scss';
import '../styles/mobile.css'

const ProductList = () => {
	return (
		<section className="main-container">
			<div className="ProductList">
				<ProductItem/>
			</div>
		</section>
	);
}

export default ProductList;