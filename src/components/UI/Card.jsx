/* eslint-disable react/prop-types */

import classes from "./Card.module.css";

export default function Card({ title, ...props }) {
	return (
		<section className={classes.card}>
			<h3>{title}</h3>
			{props.children}
		</section>
	);
}
