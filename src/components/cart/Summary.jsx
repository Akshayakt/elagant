/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { currencyFormatter } from "../../util/formatter";
import classes from "./Summary.module.css";
import CartItem from "./CartItem";

export default function Summary({ isCart }) {
	const cartTotalPrice = useSelector((state) => state.cart.totalPrice);
	const cartProducts = useSelector((state) => state.cart.products);
	const navigate = useNavigate();

	function handleCheckout() {
		navigate("/cart/checkout");
	}

	return (
		<aside className={classes["cart-summary"]}>
			{isCart ? (
				<h3 className={classes.title}>Cart Summary</h3>
			) : (
				<h2 className={classes.title}>Order Summary</h2>
			)}

			{!isCart &&
				cartProducts.map((product) => (
					<CartItem
						key={product.id}
						image={product.image}
						name={product.name}
						id={product.id}
						showRemove={false}
						quantity={product.quantity}
						price={product.price}
					/>
				))}
			<ul>
				<li>
					<span>Subtotal</span>
					<span>{currencyFormatter.format(cartTotalPrice)}</span>
				</li>
				<li>
					<span>Total</span>
					<span>{currencyFormatter.format(cartTotalPrice)}</span>
				</li>
			</ul>

			{isCart && (
				<button
					className={classes["checkout-btn"]}
					disabled={cartTotalPrice <= 0}
					onClick={handleCheckout}>
					Checkout
				</button>
			)}
		</aside>
	);
}
