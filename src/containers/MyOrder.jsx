import React, {useContext} from "react";
import '../styles/MyOrder.scss';
import BackArrow from '../icons/flechita.svg'

import Appcontext from "../context/AppContext";
import OrderItem from "../components/OrderItem";

const MyOrder = () => {
	const {state} = useContext(Appcontext);

	const sumproducts = () => {
		const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
		const sum = state.cart.reduce(reducer,0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={BackArrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((product, index) => (
					<OrderItem  indexValue={index} product={product} key={index} />
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumproducts()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;