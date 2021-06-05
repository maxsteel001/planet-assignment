import { configureStore } from "@reduxjs/toolkit";
import planetReducer from "../planet/planetSlice";
export const store = configureStore({
  reducer: {
    planet: planetReducer,
  },
});
