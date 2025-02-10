/* eslint-disable react/prop-types */
import classes from "./Input.module.css";
export default function Input({ label, placeholder, name, ...props }) {
	return (
		<div className={classes["input-wrapper"]}>
			<label>{label}</label>
			<input
				placeholder={placeholder ? placeholder : label}
				name={name}
				{...props}
				required
			/>
		</div>
	);
}
