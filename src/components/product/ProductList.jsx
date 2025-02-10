import { useSelector } from "react-redux";

import classes from "./ProductList.module.css";
import ProductItem from "./ProductItem";

export default function ProductList() {
    const productList = useSelector(state => state.products.products);
    const appliedFilters = useSelector(state => state.products.appliedFilters);

    const filteredProducts = productList.filter(product => {
        if (product.categories?.includes(appliedFilters.category) || appliedFilters.category === 'All Rooms') {
            return product;
        }
    });


	return <section className="flex-grow">
        <h2>{appliedFilters.category}</h2>
        {filteredProducts?.length ? <ul className={classes['product-list']}>
            {filteredProducts.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                />
            ))}
        </ul> : <p>No Products</p>}
    </section>;
}
