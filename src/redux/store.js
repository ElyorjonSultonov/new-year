import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./ProductSlice";
import RouteReducer from "./RoutesSlice";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    routes: RouteReducer,
  },
});
