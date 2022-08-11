import React from "react";
import recipes from "../../pages/recipes";

const NewRecipeDetails = (props) => {
  const { recipe, getHours, getMinutes, getType, getDifficulty } = props;

  return (
    <>
      <div className="flex gap-3 flex-wrap flex-col ">
        <label className="text-gray-700 " htmlFor="Hours">
          Hours
          <select
            onChange={getHours}
            id="Hours"
            className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            name="Hours"
            defaultValue={recipe.hours}
          >
            <option value="">Select an option</option>
            <option value="1">1 Hour</option>
            <option value="2">2 Hours</option>
            <option value="3">3 Hours</option>
          </select>
        </label>
        <label className="text-gray-700 " htmlFor="Hours">
          Minutes
          <select
            onChange={getMinutes}
            id="Hours"
            className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            name="Hours"
            defaultValue={recipe.minutes}
          >
            <option value="">Select an option</option>
            <option value="mins">Minutes</option>
            <option value="15">15 Mins</option>
            <option value="30">30 Mins</option>
            <option value="40">40 Mins</option>
            <option value="50">50 Mins</option>
          </select>
        </label>
      </div>
      <div className="flex gap-3 flex-col ">
        <label className="text-gray-700" htmlFor="Type">
          Type
          <select
            onChange={getType}
            id="Type"
            className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            name="Type"
            defaultValue={recipe.type}
          >
            <option value="Tunisian cuisine">Tunisian cuisine</option>
            <option value="Salads">Salads</option>
            <option value="Sea Food">Sea Food</option>
            <option value="Snacks">Snacks</option>
            <option value="Soups">Soups</option>
          </select>
        </label>
        <label className="text-gray-700" htmlFor="Difficulty">
          Difficulty
          <select
            onChange={getDifficulty}
            id="Difficulty"
            className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            name="Difficulty"
            defaultValue={recipe.difficulty}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </label>
      </div>
    </>
  );
};

export default NewRecipeDetails;
