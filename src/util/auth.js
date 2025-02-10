import { redirect } from "react-router-dom";

export function getTokenDuration() {
	const expirationTime = localStorage.getItem("expirationTime");
	const expirationDate = new Date(expirationTime);
	const now = new Date();
	const duration = expirationDate.getTime() - now.getTime();

	return duration;
}

export function getAuthData() {
	const userDetails = localStorage.getItem("userDetails");

	if (!userDetails) {
		return null;
	}

	if (getTokenDuration() < 0) {
		return "EXPIRED";
	}

	return userDetails;
}

export function authLoader() {
	return getAuthData();
}

export function canActivateLoader() {
	const userDetails = getAuthData();
	if (!userDetails) {
		return redirect("/auth");
	}

	return null;
}

export function logoutLoader() {
	const userDetails = getAuthData();
	if (userDetails) {
		localStorage.removeItem("userDetails");
		localStorage.removeItem("expirationTime");
	}

	return null;
}
