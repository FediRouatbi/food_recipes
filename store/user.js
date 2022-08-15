import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    uid: null,
    displayName: null,
    email: null,
    phoneNumber: null,
    photoURL: null,
  },
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
    },
    login(state, action) {
      state.user = {
        uid: action.payload.uid,
        displayName: action.payload.displayName,
        phoneNumber: action.payload.phoneNumber,
        photoURL: action.payload.photoURL,
        email: action.payload.email,
      };
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice.reducer;
