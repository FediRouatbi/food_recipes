import React from "react";
import { useState } from "react";
import AddMoreButton from "./AddMoreButton";
import Ingredient from "./Ingredient";
import Method from "./Method";
const addOne = (state) => {
  const latestNUmber = [...state].pop();
  if (!latestNUmber) return [1];
  return [...state, latestNUmber + 1];
};
const IngredientsAndMethod = () => {
  const [ingredientsNumber, setingredientsNumber] = useState([1]);
  const [methodNumber, setMethodNumber] = useState([1]);
  const addIngredient = () => {
    setingredientsNumber((prev) => addOne(prev));
  };
  const addMethode = () => {
    setMethodNumber((prev) => addOne(prev));
  };
  const removeItem = (num) => {
    setingredientsNumber((prev) => prev.filter((el) => el !== num));
  };
  const removeMethod = (num) => {
    setMethodNumber((prev) => prev.filter((el) => el !== num));
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        {ingredientsNumber.map((el, i) => (
          <Ingredient key={el} num={i + 1} id={el} removeItem={removeItem} />
        ))}
        <AddMoreButton addMethode={addIngredient} />
      </div>
      <div className="flex flex-col gap-2">
        {methodNumber.map((el, i) => (
          <Method key={el} num={i + 1} id={el} removeMethod={removeMethod} />
        ))}
        <AddMoreButton addMethode={addMethode} />
      </div>
    </>
  );
};

export default IngredientsAndMethod;
