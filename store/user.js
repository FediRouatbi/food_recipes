import { createSlice } from "@reduxjs/toolkit";

const initialState = { username: null, email: null, image: null };
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state = initialState;
    },
    login(state, action) {
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
