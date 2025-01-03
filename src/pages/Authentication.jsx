import { redirect } from "react-router-dom";
import LogoImg from "../assets/logo.jpeg";
import AuthForm from "../components/auth/AuthForm";

export default function AuthenticationPage() {
	return (
		<section className="auth-container">
			<div className="left-section">
				<h1>3legant.</h1>
				<img src={LogoImg} alt="3legant." />
			</div>
			<AuthForm />
		</section>
	);
}

export async function action({ request }) {
	const searchParam = new URL(request.url).searchParams;
	const mode = searchParam.get("mode") || "signin";

	if (mode !== "signup" && mode !== "signin") {
		throw new Response(JSON.stringify({ message: "Invalid mode!" }), {
			status: 422,
		});
	}

	const data = await request.formData();
	const userData = {
		email: data.get("email"),
		password: data.get("password"),
	};

	if (mode === "signup") {
		userData["name"] = data.get("name");
	}

	localStorage.setItem("userDetails", JSON.stringify(userData));

	const expirationDate = new Date();
	expirationDate.setHours(expirationDate.getHours() + 1);

	localStorage.setItem("expirationTime", expirationDate.toISOString());

	return redirect("/");
}
