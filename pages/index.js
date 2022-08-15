import Hero from "../components/Hero";
import LatestRecipies from "../components/LatestRecipies";
import mongoose from "mongoose";
//import RecipeModel from "../store/newRecipeSchema";
import RecipeModel from "../store/newRecipeSchema";

export default function Home({ allRecipes }) {
  const recipes = JSON.parse(allRecipes);
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
  const allRecipes = JSON.stringify(recipes);
  mongoose.connection.close();
  return { props: { allRecipes }, revalidate: 1 };
}
