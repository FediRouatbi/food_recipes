import React from "react";

const AddMoreButton = (props) => {
  return (
    <button
      type="button"
      onClick={props.addMethode}
      className="w-fit ml-10 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
    >
      ADD MORE
    </button>
  );
};

export default AddMoreButton;
