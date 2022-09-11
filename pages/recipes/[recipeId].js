import React from "react";
import mongoose from "mongoose";
import RecipeModel from "../../store/recipeSchema";
import AllAboutRecipe from "../../components/AllAboutRecipe";
import Head from "next/head";
const RecipeDetails = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.name}</title>
      </Head>
      <AllAboutRecipe recipe={data} />
    </>
  );
};
export async function getStaticPaths() {
  await mongoose.connect(process.env.MONGO_URL);

  const data = await RecipeModel.find({}).select({ id: 1, _id: 0 });

  mongoose.connection.close();
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

  mongoose.connection.close();

  data = JSON.parse(JSON.stringify(data));
  return { props: { data } };
}
