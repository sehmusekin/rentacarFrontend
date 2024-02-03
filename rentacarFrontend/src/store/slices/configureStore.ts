import { configureStore } from "@reduxjs/toolkit";
import { carReducer } from "./carByIdSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
