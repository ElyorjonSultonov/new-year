import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  routes: false,
};

const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    routesTrue: (state) => {
      state.routes = true;
    },
  },
});
export const { routesTrue } = routesSlice.actions;

export default routesSlice.reducer;
