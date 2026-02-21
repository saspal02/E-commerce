import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./ProductReducer";
import Products from "../../components/products/Products";
import { errorReducer } from "./errorReducers";

export const store = configureStore({
  reducer: {
    products: productReducer,
    errors: errorReducer,
  },
  preloadedState: {},
});

export default store;
