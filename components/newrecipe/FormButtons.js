import React, { useState } from "react";
import SpinnerButton from "../SpinnerButton";
import Modal from "../Modal";

import { confirmStep1, confirmStep2, confirmStep3 } from "./stepsValidation";
const FormButtons = (props) => {
  const {
    openModal,
    closeModal,
    step,
    nextPage,
    previousPage,
    recipe,
    showModal,
  } = props;
  const [loading, setLoading] = useState(false);
  let validation = "";
  if (step === 1) validation = confirmStep1(recipe);
  if (step === 2) validation = confirmStep2(recipe);
  if (step === 3) validation = confirmStep3(recipe);
  const addRecipe = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      openModal();
      setLoading(false);
    }, 2000);
  };
  return (
    <>
      <div className=" flex justify-between  mt-auto">
        {step !== 1 && (
          <button
            onClick={previousPage}
            type="button"
            className="py-2 px-4  w-fit bg-blue-500 hover:bg-blue-600 focus:ring-blue-600 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Previous
          </button>
        )}
        {step !== 4 && (
          <button
            disabled={!validation}
            onClick={nextPage}
            className="ml-auto  disabled:bg-slate-500 py-2 px-4 w-fit bg-blue-500 hover:bg-blue-600 focus:ring-blue-600 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Next
          </button>
        )}
        {step == 4 && (
          <button
            onClick={addRecipe}
            className="flex ml-auto py-2 px-4 w-fit bg-green-500 hover:bg-green-600 focus:ring-green-600 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            {loading && <SpinnerButton />}
            {loading ? "Sending" : "Confirm"}
          </button>
        )}
      </div>
      {showModal && <Modal closeModal={closeModal} />}
    </>
  );
};

export default FormButtons;
