import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    uid: null,
    displayName: null,
    email: null,
    phoneNumber: null,
    photoURL: null,
    about: null,
  },
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => initialState,
    login(state, action) {
      state.user = action.payload;
    },
    update(state, action) {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice.reducer;
