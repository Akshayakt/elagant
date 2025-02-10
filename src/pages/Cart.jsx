import { Outlet } from "react-router-dom";

export default function CartPage() {
	return (
		<section className="contents-wrapper">
			<h1 className="center-title">Cart</h1>
			<Outlet />
		</section>
	);
}
