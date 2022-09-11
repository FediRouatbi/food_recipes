import Hero from "../components/Hero";
import LatestRecipies from "../components/LatestRecipies";
import mongoose from "mongoose";
//import RecipeModel from "../store/newRecipeSchema";
import Head from "next/head";
import RecipeModel from "../store/recipeSchema";
import { useEffect, useState } from "react";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Home({ allRecipes }) {
  const [recipes, setRecipes] = useState(allRecipes);
  const { data, error } = useSWR("/api/recipes", fetcher);
  useEffect(() => {
    if (data) setRecipes(data.slice(0, 3));
  }, [data]);
  return (
    <>
      <Head>
        <title>Food Recipes</title>
        <meta
          name="description"
          content="Food Recipes is here to help you cook delicious meals with less stress and more joy. Find the best recipe ideas discover the one that fit your eating preferences, needs, and more. Cook with confidence. Enjoy your food."
        />
      </Head>
      <Hero />
      <LatestRecipies recipes={recipes} />
    </>
  );
}

export async function getStaticProps() {
  await mongoose.connect(process.env.MONGO_URL);

  const recipes = await RecipeModel.find({}).sort({ _id: -1 }).limit(3);
  const allRecipes = JSON.parse(JSON.stringify(recipes));
  mongoose.connection.close();
  return { props: { allRecipes }, revalidate: 600 };
}
