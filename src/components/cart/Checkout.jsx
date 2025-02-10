import { useActionState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import classes from "./Checkout.module.css";
import { cartActions } from "../../store/cart";

import Summary from "./Summary";
import Card from "../UI/Card";
import Input from "../UI/Input";

export default function Checkout() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const cartTotalPrice = useSelector((state) => state.cart.totalPrice);

	function submitForm(prevState, formData) {
		const data = Object.fromEntries(formData.entries());

		console.log(data);
		dispatch(cartActions.clearCart());

		navigate('/cart/order-complete');
	}

	const [formState, formAction] = useActionState(submitForm, null);

	return (
		<>
			<h2>Checkout Details</h2>
			<div className={classes["checkout-wrapper"]}>
				<form action={formAction}>
					<Card title="Contact Information">
						<div className={classes["two-col-wrapper"]}>
							<Input
								type="text"
								label="First Name"
								name="first_name"
							/>
							<Input
								type="text"
								label="Last Name"
								name="last_name"
							/>
						</div>
						<Input
							type="number"
							label="Phone Number"
							name="phone_number"
						/>
						<Input
							type="email"
							placeholder="Your Email"
							label="Email Address"
							name="email"
						/>
					</Card>
					<Card title="Shipping Address">
						<Input
							type="text"
							label="Street Address 1"
							name="street_address"
						/>
						<Input type="text" label="City" name="city" />
						<div className={classes["two-col-wrapper"]}>
							<Input type="text" label="State" name="state" />
							<Input type="number" label="Zip Code" name="zip" />
						</div>
					</Card>
					<Card title="Payment Method">
						<Input
							type="number"
							label="Card Number"
							placeholder="1234 1234 1234"
							name="card_number"
						/>
						<div className={classes["two-col-wrapper"]}>
							<Input
								type="text"
								label="Expiration Date"
								placeholder="MM/DD"
								name="expiry"
								maxLength="5"
							/>
							<Input
								type="text"
								label="CVC"
								placeholder="CVC Code"
								name="cvc"
								maxLength="3"
							/>
						</div>
					</Card>
					<button disabled={!(cartTotalPrice > 0)}>
						Place Order
					</button>
				</form>
				<Summary isCart={false} />
			</div>
		</>
	);
}
