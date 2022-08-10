import React from "react";

const NewRecipeDetails = () => {
  return (
    <>
      <div className="flex gap-3">
        <label className="text-gray-700" htmlFor="Hours">
          Hours
          <select
            id="Hours"
            className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            name="Hours"
          >
            <option value="">Select an option</option>
            <option value="1">1 Hour</option>
            <option value="2">2 Hours</option>
            <option value="3">3 Hours</option>
          </select>
        </label>
        <label className="text-gray-700" htmlFor="Hours">
          Minutes
          <select
            id="Hours"
            className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            name="Hours"
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
      <div className="flex gap-3">
        <label className="text-gray-700" htmlFor="Type">
          Type
          <select
            id="Type"
            className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            name="Type"
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
            id="Difficulty"
            className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            name="Difficulty"
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
