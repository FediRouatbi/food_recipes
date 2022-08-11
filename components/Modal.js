import React from "react";
import Portal from "./Portal";
const Modal = ({ closeModal }) => {
  document.body.style.overflow = "hidden";
  const closeShowModal = () => {
    document.body.style.overflow = "visible";
    closeModal();
  };
  return (
    <>
      <h1 className=" fixed w-full h-screen overflow-hidden bg-black/70 backdrop-blur-sm inset-0 z-10  "></h1>
      <div className="absolute flex justify-center items-center inset-0 z-20 text-3xl text-white w-full h-full">
        <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-64 m-auto">
          <div className="w-full h-full text-center">
            <div className="flex h-full flex-col justify-between">
              <svg
                className="h-12 w-12 mt-4 m-auto text-green-500"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <p className="text-gray-700">
                You Have Been Successfully Add The Recipe 😀
              </p>
              <div className="flex items-center justify-between gap-4 w-full mt-8">
                <button
                  onClick={closeShowModal}
                  type="button"
                  className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portal(Modal);
