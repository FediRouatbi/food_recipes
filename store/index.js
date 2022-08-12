import { configureStore } from "@reduxjs/toolkit";
import stepSlice from "./Step";
import newRecipeSlice from "./newRecipe";
import userSlice from "./user";
const store = configureStore({
  reducer: { step: stepSlice, newRecipe: newRecipeSlice, user: userSlice },
});
export default store;
