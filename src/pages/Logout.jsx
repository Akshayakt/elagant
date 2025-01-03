import { redirect } from "react-router-dom";

export function action() {
	localStorage.removeItem("userDetails");
	localStorage.removeItem("expirationTime");

	return redirect("/");
}
