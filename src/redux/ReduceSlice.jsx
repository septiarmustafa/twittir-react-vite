import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
  name: "Septiar",
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    changeName: (state) => {
      state.name = "Tiar";
    },
  },
});

export const { increment, decrement, changeName } = counterSlice.actions;
export default counterSlice.reducer;

// file ini kita bikin slice nya
