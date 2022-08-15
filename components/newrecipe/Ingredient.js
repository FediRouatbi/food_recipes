import React, { useRef } from "react";

const Ingredient = ({ num, removeItem, ingredient, getName, getQuantity }) => {
  return (
    <div className="flex gap-2 items-center flex-wrap ">
      <div className="flex ">
        <span className="px-4 py-2  text-base rounded-l text-white  bg-blue-500">
          {num}
        </span>
        <input
          onChange={(e) => getName(ingredient.id, e.target.value)}
          value={ingredient.name}
          type="text"
          placeholder="Item Name"
          className="pl-1 rounded-r-lg w-[106px]  border-2 md:w-full focus:outline-none focus:ring-2  focus:border-transparent"
        />
      </div>
      <input
        value={ingredient.quantity}
        type="text"
        placeholder="Quantity"
        className="pl-1 w-24  md:w-auto rounded-r-lg border-2 self-stretch focus:outline-none focus:ring-2  focus:border-transparent"
        onChange={(e) => getQuantity(ingredient.id, e.target.value)}
      />
      {num !== 1 && (
        <svg
          onClick={removeItem.bind(null, ingredient.id)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-red-400 cursor-pointer "
        >
          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
        </svg>
      )}
    </div>
  );
};

export default Ingredient;
