import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./ProductSlice";
import RouteReducer from "./RoutesSlice";
import UsersReduser from "./UsersSlice";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    routes: RouteReducer,
    users: UsersReduser,
  },
});
