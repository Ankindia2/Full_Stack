import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Slice2";

const stores = configureStore({
  reducer: {
    slice2: CartReducer
  }
});

export default stores;