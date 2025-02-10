import { createSlice } from "@reduxjs/toolkit";

import { DUMMY_PRODUCTS } from "../util/dummy-data";

const initialState = {
    products: DUMMY_PRODUCTS,
    appliedFilters: {
        category: 'All Rooms',
    },
};

const productSlice = createSlice({
    name: 'productSlice',
    initialState: initialState,
    reducers: {
        filterProducts(state, action) {
            state.appliedFilters.category = action.payload;
        },
    }
});

export const productActions = productSlice.actions;

export default productSlice;