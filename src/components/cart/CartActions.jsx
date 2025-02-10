/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";

import { cartActions } from "../../store/cart";

import classes from "./CartActions.module.css";

export default function CartActions({ id, quantity }) {
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.products.products);
	const currentProduct = productList.find((product) => product.id === id);

	function handleAddProduct() {
		dispatch(cartActions.addProduct(currentProduct));
	}

	function handleReduceProduct() {
		dispatch(cartActions.reduceProductQuantity(id));
	}

	return (
		<div className={classes["cart-actions-wrapper"]}>
			<button onClick={handleReduceProduct}>-</button>
			<span>{quantity}</span>
			<button onClick={handleAddProduct}>+</button>
		</div>
	);
}
