import React from "react";
import '../styles/Checkout.scss';
import OrderItem from "../components/OrderItem";

const Checkout = () => {
	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">My order</h1>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>date</span>
							<span>articles</span>
						</p>
						<p>$</p>
					</div>
				</div>
				<OrderItem/>
			</div>
		</div>
	);
}

export default Checkout;