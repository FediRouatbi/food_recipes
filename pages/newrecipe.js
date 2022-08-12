import React from "react";
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
const Newrecipe = () => {
  const step = useSelector((state) => state.step.current);
  const showModal = useSelector((state) => state.step.showModal);
  const recipe = useSelector((state) => state.newRecipe);
  const updateCurrentStep = (num) => {
    dispatch(stepActions.updateStep(num));
  };
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(stepActions.openModal());
  };
  const closeModal = () => {
    dispatch(stepActions.closeModal());
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
    //e.target.files[0]
  };
  const getRecipeName = (name) => {
    dispatch(newRecipeActions.updateRecipeName(name));
  };
  const getAboutRecipe = (about) => {
    dispatch(newRecipeActions.updateRecipeAbout(about));
  };
  return (
    <section className="text-gray-600 body-font px-4 ">
      <div className="container  py-24 mx-auto flex flex-wrap flex-col w-fit min-h-[810px]">
        <Steps updateCurrentStep={updateCurrentStep} />

        {step === 1 && <ImageInput getImage={getImage} />}
        <form className="flex flex-col gap-5 w-full  mt-10 flex-grow ">
          {step === 1 && (
            <NewRecipeHeader
              recipe={recipe}
              getAboutRecipe={getAboutRecipe}
              getRecipeName={getRecipeName}
            />
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
            openModal={openModal}
            closeModal={closeModal}
          />
        </form>
      </div>
    </section>
  );
};

export default Newrecipe;
