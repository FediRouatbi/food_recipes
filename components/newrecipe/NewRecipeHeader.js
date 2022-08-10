import React from "react";

const NewRecipeHeader = () => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <label htmlFor="RecipeName" className="text-xl font-semibold ">
          Recipe Name :
        </label>
        <input
          type="text"
          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2  focus:border-transparent"
          placeholder="Recipe Name"
          id="RecipeName"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className=" text-xl font-semibold" htmlFor="info">
          About Recipe :
        </label>
        <textarea
          className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2  focus:border-transparent"
          id="info"
          placeholder="Enter your comment"
          rows="5"
          cols="40"
          required
        ></textarea>
      </div>
    </>
  );
};

export default NewRecipeHeader;
