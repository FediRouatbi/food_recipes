import React from "react";

const NewRecipeHeader = ({ getAboutRecipe, getRecipeName, recipe }) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <label htmlFor="RecipeName" className="text-xl font-semibold ">
          Recipe Name :
        </label>
        <input
          onChange={(e) => getRecipeName(e.target.value)}
          type="text"
          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2  focus:border-transparent"
          placeholder="Recipe Name"
          id="RecipeName"
          value={recipe.name}
        />
      </div>
      <div className="flex flex-col gap-1 ">
        <label className=" text-xl font-semibold" htmlFor="info">
          About Recipe :
        </label>
        <textarea
          onChange={(e) => getAboutRecipe(e.target.value)}
          className=" max-h-full max-w-full appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2  focus:border-transparent"
          id="info"
          placeholder="Enter your comment"
          value={recipe.about}
        ></textarea>
      </div>
    </>
  );
};

export default NewRecipeHeader;
