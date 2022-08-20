import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
const initialState = {
  id: v4(),
  image: null,
  name: "",
  about: "",
  ingredients: [{ name: "", quantity: "", id: v4() }],
  methods: [{ text: "", id: v4() }],
  timeToCook: "",
  hours: 0,
  minutes: 0,
  type: "Tunisian cuisine",
  difficulty: "Easy",
};
const newRecipe = createSlice({
  name: "newRecipe",
  initialState,
  reducers: {
    updateImage(state, action) {
      state.image = action.payload;
    },
    updateRecipeName(state, action) {
      state.name = action.payload;
    },
    updateRecipeAbout(state, action) {
      state.about = action.payload;
    },
    addIngredient(state) {
      state.ingredients.push({ name: "", quantity: "", id: v4() });
    },
    removeIngredient(state, action) {
      state.ingredients = state.ingredients.filter(
        (el) => el.id !== action.payload
      );
    },
    addMethod(state) {
      state.methods.push({ text: "", id: v4() });
    },
    removeMethod(state, action) {
      state.methods = state.methods.filter((el) => el.id !== action.payload);
    },
    changeIngredientName(state, action) {
      state.ingredients = state.ingredients.map((item) => {
        if (item.id === action.payload.id) {
          item.name = action.payload.name;
        }
        return item;
      });
    },

    changeIngredientQuantity(state, action) {
      state.ingredients = state.ingredients.map((item) => {
        if (item.id === action.payload.id)
          item.quantity = action.payload.quantity;

        return item;
      });
    },
    updateMethods(state, action) {
      state.methods = state.methods.map((item) => {
        if (item.id === action.payload.id) item.text = action.payload.text;
        return item;
      });
    },
    updateDifficulty(state, action) {
      state.difficulty = action.payload;
    },
    updateType(state, action) {
      state.type = action.payload;
    },
    updateHour(state, action) {
      state.hours = action.payload;

    
    },
    updateMintues(state, action) {
      state.minutes = action.payload;

 
    },
    reset: () => initialState,
  },
});

export const newRecipeActions = newRecipe.actions;
export default newRecipe.reducer;
