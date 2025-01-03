import { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";

import { getTokenDuration } from "../util/auth";

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
			{/* <MainNavigation /> */}
			<main>
				<Outlet />
			</main>
		</>
	);
}
