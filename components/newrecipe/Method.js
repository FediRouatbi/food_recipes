import React from "react";

const Method = ({ num, removeMethod, method, updateMethod }) => {
  return (
    <div className="flex gap-2 items-center ">
      <div className="flex items-start">
        <span className=" px-4 py-2  text-base rounded-l text-white  bg-blue-500 ">
          {num}
        </span>

        <textarea
          className="flex-1 appearance-none h-auto border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-r-lg text-base focus:outline-none focus:ring-2  focus:border-transparent"
          id="comment"
          placeholder="Procedure Step"
          name="comment"
          rows="2"
          cols="40"
          value={method.text}
          onChange={(e) => updateMethod(method.id, e.target.value)}
        ></textarea>
      </div>

      {num !== 1 && (
        <svg
          onClick={removeMethod.bind(null, method.id)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-red-400 cursor-pointer"
        >
          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
        </svg>
      )}
    </div>
  );
};

export default Method;
