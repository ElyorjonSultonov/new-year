import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload]; 
    },
    deleteFromBasket: (state, action) => {
      const filteredBasket = state.products.filter(
        (item) => item.id !== action.payload
      );
      state.products = filteredBasket;
    },
  },
});

export const { addProduct, deleteFromBasket } = productSlice.actions;
export default productSlice.reducer;
