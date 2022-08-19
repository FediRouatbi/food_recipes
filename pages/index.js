import Hero from "../components/Hero";
import LatestRecipies from "../components/LatestRecipies";
import mongoose from "mongoose";
//import RecipeModel from "../store/newRecipeSchema";
import RecipeModel from "../store/recipeSchema";
import { useEffect, useState } from "react";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Home({ allRecipes }) {
  const [recipes, setRecipes] = useState(allRecipes);
  const { data, error } = useSWR("/api/recipes", fetcher);
  useEffect(() => {
    if (data) setRecipes(data);
  }, [data]);
  return (
    <>
      <Hero />
      <LatestRecipies recipes={recipes} />
    </>
  );
}

export async function getStaticProps() {
  await mongoose.connect(process.env.MONGO_URL);

  const recipes = await RecipeModel.find({});
  const allRecipes = JSON.parse(JSON.stringify(recipes));
  mongoose.connection.close();
  return { props: { allRecipes }, revalidate: 600 };
}
