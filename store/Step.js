import { createSlice } from "@reduxjs/toolkit";
const initialState = { current: 1, showModal: false };
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
    updateStep(state, action) {
      state.current = action.payload;
    },
    openModal(state) {
      state.showModal = true;
    },
    closeModal(state) {
      state.showModal = false;
    },
    reset() {
      return initialState;
    },
  },
});
export const stepActions = steps.actions;
export default steps.reducer;
