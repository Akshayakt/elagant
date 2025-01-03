import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import RootPage from "./pages/Root";
import HomePage from "./pages/Home";
import AuthenticationPage, {action as authAction} from "./pages/Authentication";
import ErrorPage from "./pages/Error";
import { action as logoutAction } from "./pages/Logout";

import { authLoader, canActivateLoader } from "./util/auth";

function App() {
	const router = createBrowserRouter([
        {
            path: '/',
            element: <RootPage />,
            errorElement: <ErrorPage />,
            id: 'root',
            loader: authLoader,
            children: [
                { index: true, element: <HomePage/>, loader: canActivateLoader, },
                { path: 'auth', element: <AuthenticationPage />, action: authAction },
                { path: 'logout', action: logoutAction },
            ]
        }
    ]);

	return <RouterProvider router={router} />;
}

export default App;
