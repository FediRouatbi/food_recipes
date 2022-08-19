import React from "react";
import { SiCodechef } from "react-icons/si";
import { MdTimer } from "react-icons/md";
import Image from "next/image";
const checkValidite = (data) => {
  if (data.text?.trim()) return true;
  if (data.name?.trim()) return true;
  else return false;
};
const RecipeDetails = ({ recipe }) => {
  return (
    <div className="flex flex-col items-start gap-5  text-lg">
      <div className="w-full">
        <div className=" relative h-52 max-w-md flex w-full mx-auto rounded-md overflow-hidden">
          {recipe?.image && (
            <Image src={recipe?.image} layout="fill" alt="recipe image " />
          )}
        </div>
      </div>
      <div className=" w-full">
        <h1 className="pb-2 text-5xl text-center font-bold">{recipe.name}</h1>
        <div className="max-w-lg">{recipe.about}</div>
        <div className="flex justify-around pt-5">
          <div className="flex gap-1 items-center">
            <SiCodechef size={30} /> {recipe.difficulty}
          </div>
          <div className="flex gap-1 items-center">
            <MdTimer size={30} /> {recipe.timeToCook}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1 items-start ">
        <span className="bg-blue-100 text-blue-800 text-2xl font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
          Ingredients :
        </span>
        {recipe.ingredients.map((el) => {
          if (checkValidite(el))
            return (
              <div key={el.id}>
                ◼ {el.quantity} {el.name}
              </div>
            );
        })}
      </div>
      <div className="flex flex-col gap-1 items-start">
        <span className="bg-blue-100 text-blue-800 text-2xl font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
          Method :
        </span>
        <div className="flex  flex-col gap-4">
          {recipe.methods.map((el, i) => {
            if (checkValidite(el))
              return (
                <div className="max-w-lg" key={el.id}>
                  <span className="text-3xl font-semibold pr-2">{i + 1}.</span>
                  {el.text}
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
