import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
const initialState = {
  image: null,
  name: null,
  about: null,
  ingredient: [{ name: null, quantity: null, id: v4() }],
  methods: [{ text: null, id: v4() }],
  timeToCook: 0,
  type: null,
  difficulty: null,
};
const newRecipe = createSlice({
  name: "newRecipe",
  initialState,
  reducers: {
    addIngredient(state) {
      state.ingredient.push({ name: null, quantity: null, id: v4() });
    },
    removeIngredient(state, action) {
      state.ingredient = state.ingredient.filter(
        (el) => el.id !== action.payload
      );
    },
  },
});

export const newRecipeActions = newRecipe.actions;
export default newRecipe.reducer;
