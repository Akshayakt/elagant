import { NavLink, useNavigate, useSubmit } from "react-router-dom";
import { useSelector } from "react-redux";

import SearchIcon from "../../assets/search.png";
import UserIcon from "../../assets/user.png";
import CartIcon from "../../assets/cart.png";

import classes from "./Header.module.css";

export default function Header() {
	const submit = useSubmit();
	const navigation = useNavigate();
	const cartCount = useSelector(state => state.cart.totalQuantity)

	const logoutHandler = () => {
		submit('',  { action: "/logout", method: "post" });
	}

	function goToCartHandler() {
		navigation('cart');
	}

	return (
		<header className={classes.header}>
			<h1>3legant.</h1>
			<nav>
				<ul className={classes["main-nav"]}>
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? `${classes.active}` : undefined
							}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="shop"
							className={({ isActive }) =>
								isActive ? `${classes.active}` : undefined
							}>
							Shop
						</NavLink>
					</li>
					<li>
						<NavLink
							to="products"
							className={({ isActive }) =>
								isActive ? `${classes.active}` : undefined
							}>
							Products
						</NavLink>
					</li>
					<li>
						<NavLink
							to="contact-us"
							className={({ isActive }) =>
								isActive ? `${classes.active}` : undefined
							}>
							Contact Us
						</NavLink>
					</li>
				</ul>
			</nav>
			<ul className={classes['icon-list']}>
				<li><img src={SearchIcon} alt="search" onClick={logoutHandler} /></li>
				<li><img src={UserIcon} alt="logout" onClick={logoutHandler} /></li>
				<li className="cursor-pointer" onClick={goToCartHandler}>
					<img src={CartIcon} alt="cart"/>
					<span className={classes['cart-count']}>{cartCount}</span>
				</li>
			</ul>
		</header>
	);
}
