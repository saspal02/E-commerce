import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./ProductReducer";
import Products from "../../components/Products";

export const store = configureStore({
    reducer: {
        products: productReducer,
    },
    preloadedState: {
    },
});
    
export default store;