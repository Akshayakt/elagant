import { Form } from "react-router-dom";

export default function Header() {
	return (
		<header>
			<h1>3legant.</h1>
			<ul>
				<Form action="/logout" method="post">
					<button>Logout</button>
				</Form>
			</ul>
			<ul></ul>
		</header>
	);
}
