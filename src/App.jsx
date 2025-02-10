import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import "./App.css";

import RootPage from "./pages/Root";
import HomePage from "./pages/Home";
import AuthenticationPage, {
	action as authAction,
} from "./pages/Authentication";
import ErrorPage from "./pages/Error";
import ShopPage from "./pages/Shop";
import ContactUsPage from "./pages/ContactUs";
// import CartPage from "./pages/Cart";
// import ProductsPage from "./pages/Products";
const ProductsPage = lazy(() => import("./pages/Products"));
const CartPage = lazy(() => import("./pages/Cart"));

import { action as logoutAction } from "./pages/Logout";

import ProductDetails from "./components/product/ProductDetails";
import ShoppingCart from "./components/cart/ShoppingCart";
import Checkout from "./components/cart/Checkout";
import OrderComplete from "./components/cart/OrderComplete";

import { authLoader, canActivateLoader, logoutLoader } from "./util/auth";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <RootPage />,
			errorElement: <ErrorPage />,
			id: "root",
			loader: authLoader,
			children: [
				{
					index: true,
					element: <HomePage />,
					loader: canActivateLoader,
				},
				{
					path: "auth",
					element: <AuthenticationPage />,
					action: authAction,
					loader: logoutLoader,
				},
				{ path: "logout", action: logoutAction },
				{
					path: "shop",
					element: <ShopPage />,
					loader: canActivateLoader,
				},
				{
					path: "products",
					// element: <ProductsPage />,
					element: (
						<Suspense fallback={<p>Loading!</p>}>
							<ProductsPage />
						</Suspense>
					),
					loader: canActivateLoader,
				},
				{
					path: "products/:productId",
					element: <ProductDetails />,
					loader: canActivateLoader,
				},
				{
					path: "contact-us",
					element: <ContactUsPage />,
					loader: canActivateLoader,
				},
				{
					path: "cart",
					// element: <CartPage />,
					element: (
						<Suspense fallback={<p>Loading Cart!</p>}>
							<CartPage />
						</Suspense>
					),
					loader: canActivateLoader,
					children: [
						{ index: true, element: <ShoppingCart /> },
						{ path: "checkout", element: <Checkout /> },
						{ path: "order-complete", element: <OrderComplete /> },
					],
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
