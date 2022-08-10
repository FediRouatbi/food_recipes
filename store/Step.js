import { createSlice } from "@reduxjs/toolkit";
const initialState = { current: 1 };
const steps = createSlice({
  name: "steps",
  initialState,
  reducers: {
    next(state) {
      if (state.current === 4) return;
      state.current++;
    },
    previous(state) {
      if (state.current === 1) return;
      state.current--;
    },
  },
});
export const stepActions = steps.actions;
export default steps.reducer;
