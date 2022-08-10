import { configureStore } from "@reduxjs/toolkit";
import stepSlice from "./Step";
import newRecipeSlice from "./newRecipe";
const store = configureStore({
  reducer: { step: stepSlice, newRecipe: newRecipeSlice },
});
export default store;
