import React from "react";
import Recipe from "../../components/recipes/Recipe";
import Pager from "../../components/recipes/Pager";
import mongoose from "mongoose";
import RecipeModel from "../../store/recipeSchema";
const recipes = ({ recipes }) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden px-8 max-w-[90rem] mx-auto">
      <div className="container  py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {recipes.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe} />
          ))}
        </div>
        <Pager />
      </div>
    </section>
  );
};

export default recipes;
export async function getStaticProps() {
  await mongoose.connect(process.env.MONGO_URL);

  const data = await RecipeModel.find({});

  const recipes = JSON.parse(JSON.stringify(data));

  return { props: { recipes }, revalidate: 600 };
}
