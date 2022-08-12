import React from "react";
import Recipe from "../components/recipes/Recipe";
import Pager from "../components/recipes/Pager";
const recipes = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden px-8 max-w-[90rem] mx-auto">
      <div className="container  py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <Recipe />
          <Recipe />
        </div>
        <Pager />
      </div>
    </section>
  );
};

export default recipes;
