import React from "react";
import FormButtons from "../components/newrecipe/FormButtons";
import ImageInput from "../components/newrecipe/ImageInput";
import IngredientsAndMethod from "../components/newrecipe/IngredientsAndMethod";
import NewRecipeDetails from "../components/newrecipe/NewRecipeDetails";
import NewRecipeHeader from "../components/newrecipe/NewRecipeHeader";
import Steps from "../components/newrecipe/Steps";
import { useSelector } from "react-redux";
const Newrecipe = () => {
  const step = useSelector((state) => state.step.current);

  return (
    <section className="text-gray-600 body-font px-4 ">
      <div className="container  py-24 mx-auto flex flex-wrap flex-col w-fit min-h-[800px]">
        <Steps />

        {step === 1 && <ImageInput />}
        <form className="flex flex-col gap-5 w-full  mt-10 flex-grow">
          {step === 1 && <NewRecipeHeader />}
          {step === 2 && <NewRecipeDetails />}
          {step === 3 && <IngredientsAndMethod />}
          <FormButtons />
        </form>
      </div>
    </section>
  );
};

export default Newrecipe;
