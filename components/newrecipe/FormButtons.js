import React from "react";
import { stepActions } from "../../store/Step";
import { useDispatch, useSelector } from "react-redux";
const FormButtons = () => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.step.current);

  const nextPage = (e) => {
    e.preventDefault();
    dispatch(stepActions.next());
  };
  const previousPage = (e) => {
    e.preventDefault();
    dispatch(stepActions.previous());
  };
  return (
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
          onClick={nextPage}
          className="ml-auto py-2 px-4 w-fit bg-blue-500 hover:bg-blue-600 focus:ring-blue-600 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          Next
        </button>
      )}
    </div>
  );
};

export default FormButtons;
