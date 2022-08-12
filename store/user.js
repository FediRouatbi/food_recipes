import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  about: "",
  username: null,
  email: null,
  image: null,
  user: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state = initialState;
    },
    login(state, action) {
      state.user = true;
      if (action.payload?.username) state.username = action.payload.username;
      if ((state.email, action.payload?.email))
        state.email = action.payload.email;
      if ((state.image, action.payload?.image))
        state.image = action.payload.image;
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice.reducer;
