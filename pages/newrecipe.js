import React, { useState } from "react";
import FormButtons from "../components/newrecipe/FormButtons";
import ImageInput from "../components/newrecipe/ImageInput";
import IngredientsAndMethod from "../components/newrecipe/IngredientsAndMethod";
import NewRecipeDetails from "../components/newrecipe/NewRecipeDetails";
import NewRecipeHeader from "../components/newrecipe/NewRecipeHeader";
import Steps from "../components/newrecipe/Steps";
import RecipeDetails from "../components/newrecipe/RecipeDetails";
import { stepActions } from "../store/Step";
import { newRecipeActions } from "../store/newRecipe";
import { useSelector, useDispatch } from "react-redux";
import { getImageUrl } from "../store/firebaseFunctions";
import axios from "axios";
import { useRouter } from "next/router";
import {
  confirmStep1,
  confirmStep2,
  confirmStep3,
} from "../components/newrecipe/stepsValidation";
import Head from "next/head";

const trimRecipe = (data) => {
  const recipe = { ...data };
  recipe.name = recipe.name.trim();
  recipe.about = recipe.about.trim();
  recipe.ingredients = recipe.ingredients.map((el) => ({
    name: el.name.trim(),
    quantity: el.quantity.trim(),
    id: el.id,
  }));
  recipe.methods = recipe.methods.map((el) => ({
    text: el.text.trim(),
    id: el.id,
  }));

  return recipe;
};
const Newrecipe = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const step = useSelector((state) => state.step.current);
  const showModal = useSelector((state) => state.step.showModal);
  const recipe = useSelector((state) => state.newRecipe);
  const user = useSelector((state) => state.user.user);

  const updateCurrentStep = (num) => {
    if (
      (num === 2 && confirmStep1(recipe)) ||
      (num === 3 && confirmStep2(recipe)) ||
      (num === 4 && confirmStep3(recipe)) ||
      num === 1
    )
      dispatch(stepActions.updateStep(num));
  };
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(stepActions.closeModal());
    reset();
    router.replace("/");
  };
  const nextPage = (e) => {
    e.preventDefault();
    dispatch(stepActions.next());
  };
  const previousPage = (e) => {
    e.preventDefault();
    dispatch(stepActions.previous());
  };
  const getHours = (e) => {
    dispatch(newRecipeActions.updateHour(+e.target.value));
  };
  const getMinutes = (e) => {
    dispatch(newRecipeActions.updateMintues(e.target.value));
  };
  const getType = (e) => {
    dispatch(newRecipeActions.updateType(e.target.value));
  };
  const getDifficulty = (e) => {
    dispatch(newRecipeActions.updateDifficulty(e.target.value));
  };
  const getImage = (e) => {
    getImageUrl(e.target.files[0], recipe.id);
  };
  const getRecipeName = (name) => {
    dispatch(newRecipeActions.updateRecipeName(name));
  };
  const getAboutRecipe = (about) => {
    dispatch(newRecipeActions.updateRecipeAbout(about));
  };
  const addNewRecipe = async (e) => {
    try {
      e.preventDefault();
      const data = trimRecipe(recipe);
      setLoading(true);

      await axios.post("/api/recipes/new-recipe", {
        ...data,

        owner: { id: user.uid, name: user.displayName },
      });
      dispatch(stepActions.openModal());
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  const reset = () => {
    dispatch(stepActions.reset());
    dispatch(newRecipeActions.reset());
  };

  return (
    <>
      <Head>
        <title>New Recipe</title>
      </Head>
      <section className="text-gray-600 body-font px-4 ">
        <div className="container  py-24 mx-auto flex flex-wrap flex-col w-fit min-h-[810px]">
          <Steps updateCurrentStep={updateCurrentStep} />

          <form className="flex flex-col gap-5 w-full  mt-10 flex-grow ">
            {step === 1 && (
              <>
                <ImageInput getImage={getImage} image={recipe.image} />
                <NewRecipeHeader
                  recipe={recipe}
                  getAboutRecipe={getAboutRecipe}
                  getRecipeName={getRecipeName}
                />
              </>
            )}
            {step === 2 && (
              <NewRecipeDetails
                recipe={recipe}
                getMinutes={getMinutes}
                getHours={getHours}
                getType={getType}
                getDifficulty={getDifficulty}
              />
            )}
            {step === 3 && <IngredientsAndMethod />}
            {step === 4 && <RecipeDetails recipe={recipe} />}
            <FormButtons
              nextPage={nextPage}
              previousPage={previousPage}
              step={step}
              recipe={recipe}
              showModal={showModal}
              closeModal={closeModal}
              addNewRecipe={addNewRecipe}
              loading={loading}
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default Newrecipe;
