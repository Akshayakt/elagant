/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";

import CartActions from "./CartActions";
import { cartActions } from "../../store/cart";
import classes from "./CartItem.module.css";
import { currencyFormatter } from "../../util/formatter";

export default function CartItem({ image, name, id, showRemove, quantity, price }) {
	const dispatch = useDispatch();

	function handleRemoveProduct() {
		dispatch(cartActions.removeProduct(id));
	}

	return (
		<div className={classes["cart-item"]}>
			<div className={classes["left-section"]}>
				<div className={classes["image-wrapper"]}>
					<img
						src={`http://localhost:5173/${image}`}
						alt="product-icon"
					/>
				</div>
				<div>
					<p>{name}</p>
					{showRemove ? (
						<button onClick={handleRemoveProduct}>Remove</button>
					) : (
						<CartActions id={id} quantity={quantity} />
					)}
				</div>
			</div>
			{!showRemove && <span>{currencyFormatter.format(price)}</span>}
		</div>
	);
}
