export const confirmStep1 = (recipe) =>
  recipe.name.trim() && recipe.about.trim() && recipe?.image;
export const confirmStep2 = (recipe) =>
  (recipe.hours || recipe.minutes) && recipe.type && recipe.difficulty;
export const confirmStep3 = (recipe) =>
  recipe.ingredients[0].name.trim() && recipe.methods[0].text.trim();
