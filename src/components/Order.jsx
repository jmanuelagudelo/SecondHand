import React from "react";
import '../styles/MainStyle.scss';
import '../styles/mobile.css';
import BackArrow from '../icons/flechita.svg'

const Order = () => {
	return (
		<div className="Order">
			<p>
				<span>date</span>
				<span>n articles</span>
			</p>
			<p>$</p>
			<img src={BackArrow} alt="arrow" />
		</div>
	);
}

export default Order;