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
    logout: () => initialState,
    login(state, action) {
      const newUser = {
        uid: action.payload.uid,
        displayName: action.payload.displayName,
        phoneNumber: action.payload.phoneNumber,
        photoURL: action.payload.photoURL,
        email: action.payload.email,
      };
      state.user = newUser;
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice.reducer;
