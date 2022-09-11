import React, { useState, useEffect } from "react";
import Recipe from "../../components/recipes/Recipe";
import Pager from "../../components/recipes/Pager";
import mongoose from "mongoose";
import RecipeModel from "../../store/recipeSchema";
import useSWR from "swr";
import Head from "next/head";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const NUMBER_OF_RECIPES_PER_PAGE = 3;
const Recipes = ({ allRecipes }) => {
  const { data, error } = useSWR("/api/recipes", fetcher);
  const [recipes, setRecipes] = useState(allRecipes);

  useEffect(() => {
    if (data) setRecipes(data);
  }, [data]);
  const [start, setStart] = useState(0);
  const currentPage = start / NUMBER_OF_RECIPES_PER_PAGE + 1;
  const pages = Math.ceil(data?.length / NUMBER_OF_RECIPES_PER_PAGE);
  const nextPage = () => {
    if (start > pages) return;
    setStart((prev) => prev + NUMBER_OF_RECIPES_PER_PAGE);
  };
  const prevPage = () => {
    if (start === 0) return;
    setStart((prev) => prev - NUMBER_OF_RECIPES_PER_PAGE);
  };
  const goToPage = (page) => {
    setStart((page - 1) * NUMBER_OF_RECIPES_PER_PAGE);
  };

  return (
    <>
      <Head>
        <title>All Recipes</title>
      </Head>
      <section className="text-gray-600 body-font overflow-hidden px-8 max-w-[90rem] mx-auto">
        <div className="container  py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {recipes
              .slice(start, start + NUMBER_OF_RECIPES_PER_PAGE)
              ?.map((recipe) => (
                <Recipe key={recipe.id} recipe={recipe} />
              ))}
          </div>
          <Pager
            pages={pages}
            nextPage={nextPage}
            prevPage={prevPage}
            goToPage={goToPage}
            currentPage={currentPage}
          />
        </div>
      </section>
    </>
  );
};

export default Recipes;
export async function getStaticProps() {
  await mongoose.connect(process.env.MONGO_URL);

  const data = await RecipeModel.find({}).sort({ _id: -1 });

  const allRecipes = JSON.parse(JSON.stringify(data));

  return { props: { allRecipes }, revalidate: 600 };
}
