import Filter from "../components/Filter";
import ProductList from "../components/product/ProductList";

const ProductsPage = () => {
    return (
        <section className="contents-wrapper products-wrapper">
            <Filter />
            <ProductList />
        </section>
    );

}

export default ProductsPage;