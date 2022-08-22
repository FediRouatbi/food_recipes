import React, { useState, useEffect } from "react";
import Recipe from "../../components/recipes/Recipe";
import Pager from "../../components/recipes/Pager";
import mongoose from "mongoose";
import RecipeModel from "../../store/recipeSchema";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Recipes = ({ allRecipes }) => {
  const { data, error } = useSWR("/api/recipes", fetcher);
  const [recipes, setRecipes] = useState(allRecipes);

  useEffect(() => {
    if (data) setRecipes(data);
  }, [data]);

  return (
    <section className="text-gray-600 body-font overflow-hidden px-8 max-w-[90rem] mx-auto">
      <div className="container  py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {recipes?.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe} />
          ))}
        </div>
        <Pager />
      </div>
    </section>
  );
};

export default Recipes;
export async function getStaticProps() {
  await mongoose.connect(process.env.MONGO_URL);

  const data = await RecipeModel.find({}).sort({ _id: -1 });

  const allRecipes = JSON.parse(JSON.stringify(data));

  return { props: { allRecipes }, revalidate: 600 };
}
