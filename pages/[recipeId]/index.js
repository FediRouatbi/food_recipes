import React from "react";
import { useRouter } from "next/router";
import mongoose from "mongoose";
import RecipeModel from "../../store/newRecipeSchema";
import AllAboutRecipe from "../../components/AllAboutRecipe";
const RecipeDetails = ({ data }) => {
  return <AllAboutRecipe recipe={data} />;
};
export async function getStaticPaths() {
  await mongoose.connect(process.env.MONGO_URL);

  const data = await RecipeModel.find({}).select({ id: 1, _id: 0 });

  return {
    fallback: true,
    paths: data.map((el) => ({
      params: { recipeId: el.id },
    })),
  };
}
export default RecipeDetails;
export async function getStaticProps(context) {
  await mongoose.connect(process.env.MONGO_URL);

  let data = await RecipeModel.findOne({ id: context.params.recipeId });
  data = JSON.parse(JSON.stringify(data));
  return { props: { data } };
}
