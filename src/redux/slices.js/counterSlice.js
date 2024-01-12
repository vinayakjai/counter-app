import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: { count: 0 },
  reducers: {
    increment(state) {
      state.count += 1;
    },
    increment500(state, action) {
      console.log(action);
      state.count += action.payload;
    },
  },
});

export const { increment, increment500 } = counterSlice.actions;
export default counterSlice.reducer;
