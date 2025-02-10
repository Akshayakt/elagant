import { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";

import { getTokenDuration } from "../util/auth";

import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";

export default function RootPage() {
	const userData = useLoaderData();
	const submit = useSubmit();

	useEffect(() => {
		if (!userData) {
			return;
		}

		if (userData === "EXPIRED") {
			submit(null, { action: "/logout", method: "post" });
			return;
		}

		setTimeout(() => {
			submit(null, { action: "/logout", method: "post" });
		}, getTokenDuration());
	}, [userData, submit]);

	return (
		<>
			<main className={userData && userData !== "EXPIRED" ? 'home-container' : 'auth-container'}>
				{userData && userData !== "EXPIRED" && <Header /> }
				<Outlet />
				{userData && userData !== "EXPIRED" && <Footer /> }
			</main>
		</>
	);
}
