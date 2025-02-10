import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart";
import { currencyFormatter } from "../../util/formatter";

import classes from "./ProductItem.module.css";

/* eslint-disable react/prop-types */
export default function ProductItem({product}) {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	function handleProductClick() {
		navigate("/products/" + product.id);
	}

	function handleAddCart(event) {
		event.stopPropagation();
		dispatch(cartActions.addProduct(product))
	}

	return (
		<li className={classes["product-item"]} onClick={handleProductClick}>
			<div className={classes["image-wrapper"]}>
				<img src={`http://localhost:5173/${product.image}`} alt={product.name} />
                <button className={classes["add-button"]} onClick={handleAddCart}>Add to Cart</button>
			</div>
			<span className="rating">Rating: {product.rating}</span>
			<h4>{product.name}</h4>
			<span>{currencyFormatter.format(product.price)}</span>
		</li>
	);
}
