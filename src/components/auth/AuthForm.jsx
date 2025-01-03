import {
	useSearchParams,
	Link,
	Form,
	useNavigation,
	useActionData,
} from "react-router-dom";

import classes from "./AuthForm.module.css";

export default function AuthForm() {
	const [searchParams, setSearchParams] = useSearchParams();
	const navigation = useNavigation();
	const actionData = useActionData();

	const isSignIn =
		searchParams.get("mode") === "signin" || !searchParams.get("mode");
	const isSubmitting = navigation.state === "submitting";

	return (
		<section className={classes.authSection}>
			{isSignIn ? (
				<>
					<h2>Sign In</h2>
					<p>
						Do not have an account?
						<Link to="?mode=signup">Sign Up</Link>
					</p>
				</>
			) : (
				<>
					<h2>Sign Up</h2>
					<p>
						Already have an account?
						<Link to="?mode=signin">Sign In</Link>
					</p>
				</>
			)}

			{actionData && actionData.message && <p>{actionData.message}</p>}

			<Form method="post" className={classes.form}>
				{!isSignIn && (
					<p>
						<label htmlFor="email">Your Name</label>
						<input id="name" type="text" name="name" required />
					</p>
				)}
				<p>
					<label htmlFor="email">Email</label>
					<input id="email" type="email" name="email" required />
				</p>
				<p>
					<label htmlFor="image">Password</label>
					<input
						id="password"
						type="password"
						name="password"
						required
					/>
				</p>
				<button disabled={isSubmitting}>
					{isSubmitting
						? "Submitting!!"
						: isSignIn
						? "Sign In"
						: "Sign Up"}
				</button>
			</Form>
		</section>
	);
}
