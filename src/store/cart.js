import { createSlice } from "@reduxjs/toolkit";

const initialCartSlice = {
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: initialCartSlice,
    reducers: {
        addProduct(state, action) {
            const productItem = action.payload;
            const existingProduct = state.products.find(product => product.id === productItem.id);
            if (existingProduct) {
                existingProduct.quantity++;
                existingProduct.subTotal += existingProduct.price;
            } else {
                const item = {
                    id: productItem.id,
                    name: productItem.name,
                    price: productItem.price,
                    image: productItem.image,
                    quantity: 1,
                    subTotal: productItem.price,
                };
                state.products.push(item);
            }
            state.totalPrice += productItem.price;
            state.totalQuantity++;
        },
        removeProduct(state, action) {
            const existingProduct = state.products.find(product => product.id === action.payload);

            state.products = state.products.filter(product => product.id !== action.payload);
            state.totalQuantity = state.totalQuantity - existingProduct.quantity;
            state.totalPrice = state.totalPrice - (existingProduct.price * existingProduct.quantity);
        },
        reduceProductQuantity(state, action) {
            const existingProduct = state.products.find(product => product.id === action.payload);
            if (existingProduct?.quantity > 1) {
                existingProduct.quantity--;
                existingProduct.subTotal -= existingProduct.price;
            } else {
               state.products = state.products.filter(product => product.id !== action.payload);
            }
            state.totalQuantity--;
            state.totalPrice -= existingProduct.price;
        },
        clearCart(state) {
            state.products = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;