import { useSelector } from "react-redux";

import { currencyFormatter } from "../../util/formatter";

import classes from "./ShoppingCart.module.css";

import CartItem from "./CartItem";
import CartActions from "./CartActions";
import Summary from "./Summary";

export default function ShoppingCart() {
	const cartProducts = useSelector((state) => state.cart.products);

	return (
		<>
			<h2>Shopping Cart</h2>
			{!cartProducts.length && <p>No Products in Cart.</p>}
			{cartProducts.length > 0 && (
				<div className={classes["cart-wrapper"]}>
					<table className={classes["cart-table"]}>
						<thead>
							<tr>
								<th>Product</th>
								<th>Quantity</th>
								<th>Price</th>
								<th>Subtotal</th>
							</tr>
						</thead>
						<tbody>
							{cartProducts.map((product) => (
								<tr key={product.id}>
									<td>
										<CartItem
											image={product.image}
											name={product.name}
											id={product.id}
											showRemove={true}
											quantity={product.quantity}
										/>
									</td>
									<td className={classes["quantity-col"]}>
										<CartActions
											id={product.id}
											quantity={product.quantity}
										/>
									</td>
									<td>
										{currencyFormatter.format(
											product.price
										)}
									</td>
									<td>
										{currencyFormatter.format(
											product.subTotal
										)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<Summary isCart={true} />
				</div>
			)}
		</>
	);
}
