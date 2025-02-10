import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ProductDetails() {
	const productList = useSelector(state => state.products.products);
	const params = useParams();

	const productId = +params.productId;

	const currentProduct = productList.find(
		(product) => product.id === productId
	);

	return (
        <section className="contents-wrapper">
            {currentProduct && currentProduct?.name}
            {!currentProduct && <p>Product Not Found</p>}
        </section>
    );
}
