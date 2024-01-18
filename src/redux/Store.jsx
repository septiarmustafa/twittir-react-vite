import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./ReduceSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
