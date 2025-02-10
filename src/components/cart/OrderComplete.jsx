import classes from "./OrderComplete.module.css";

export default function OrderComplete() {
	return (
		<>
			<h2>Order Complete</h2>
			<div className={classes['completed-wrapper']}>
				<h4>Thank You!</h4>
				<h2>Your order has been received</h2>
			</div>
		</>
	);
}
