import { useDispatch, useSelector } from "react-redux";

import { productActions } from "../store/product";

import SettingsIcon from "../assets/settings-sliders.png";
import { CATEGORIES, PRICE_RANGES } from "../util/dummy-data";

import classes from "./Filter.module.css";

export default function Filter() {
    const dispatch = useDispatch();
    const appliedFilter = useSelector(state => state.products.appliedFilters);

    function categorySelectionHandler(selectedCategory) {
        dispatch(productActions.filterProducts(selectedCategory));
    }

    return(
        <aside className={classes.aside}>
            <div className="flex-align-center">
                <img src={SettingsIcon} alt="filter_icon"/>
                <h2>Filter</h2>
            </div>

            <div className={classes["filter-list"]}>
                <h3>Categories</h3>
                <ul>
                    {CATEGORIES.map((category) =>
                        <li className={`${classes['filter-item']} ${appliedFilter.category === category.name ? classes['selected-item'] : ''}`}
                            key={category.name}
                            onClick={() => categorySelectionHandler(category.name)}
                        >{category.name}</li>
                    )}
                </ul>
            </div>

            <div className={classes["filter-list"]}>
                <h3>Price</h3>
                <ul>
                    {PRICE_RANGES.map((price) =>
                        <li className={`${classes['filter-item']} ${price.isSelected ? classes['selected-item'] : ''}`}
                            key={price.name}
                            onClick={() => categorySelectionHandler(price.name)}
                        >{price.name}</li>
                    )}
                </ul>
            </div>
        </aside>
    );
}