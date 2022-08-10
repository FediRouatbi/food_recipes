import React from "react";
import AddMoreButton from "./AddMoreButton";
import Ingredient from "./Ingredient";
import Method from "./Method";
import { useSelector, useDispatch } from "react-redux";
import { newRecipeActions } from "../../store/newRecipe";

const IngredientsAndMethod = () => {
  const ingredients = useSelector((state) => state.newRecipe.ingredients);
  const methods = useSelector((state) => state.newRecipe.methods);
  const dispatch = useDispatch();
  const addIngredient = () => {
    dispatch(newRecipeActions.addIngredient());
  };
  const addMethode = () => {
    dispatch(newRecipeActions.addMethod());
  };
  const removeItem = (id) => {
    dispatch(newRecipeActions.removeIngredient(id));
  };
  const removeMethod = (id) => {
    dispatch(newRecipeActions.removeMethod(id));
  };
  const handelNameChange = (id, name) => {
    dispatch(newRecipeActions.changeIngredientName({ id, name }));
  };
  const handelQuantityChange = (id, quantity) => {
    dispatch(
      newRecipeActions.changeIngredientQuantity({
        id,
        quantity,
      })
    );
  };
  const updateMethod = (id, text) => {
    dispatch(newRecipeActions.updateMethods({ id, text }));
  };
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="text-lg">Ingredients : </div>
        {ingredients.map((el, i) => (
          <Ingredient
            getName={handelNameChange}
            getQuantity={handelQuantityChange}
            key={el.id}
            num={i + 1}
            ingredient={el}
            removeItem={removeItem}
          />
        ))}
        <AddMoreButton addMethode={addIngredient} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-lg">Method : </div>
        {methods.map((el, i) => (
          <Method
            updateMethod={updateMethod}
            key={el.id}
            num={i + 1}
            method={el}
            removeMethod={removeMethod}
          />
        ))}
        <AddMoreButton addMethode={addMethode} />
      </div>
    </>
  );
};

export default IngredientsAndMethod;
