import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowSmRight } from "react-icons/hi";

import RecipeInfo from "../RecipeInfo";
const Recipe = ({ recipe }) => {
  return (
    <div className="my-8 flex md:gap-10 gap-0 flex-col  sm:w-full mx-auto rounded-md sm:flex-row shadow-md items-center hover:shadow-lg transition-all">
      <div className=" relative   w-full   max-w-[200px] max-h-60 h-48 ">
        <Image
          className=" brightness-[0.9] z-20  md:rounded-l rounded-t md:rounded-r-none  "
          src={recipe?.image}
          alt="recipe"
          layout="fill"
        />
      </div>

      <div className="md:flex-grow p-4 relative ">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
          {recipe?.name}
        </h2>
        <p className="leading-relaxed">{recipe?.about}</p>
        <Link href={`recipes/${recipe.id}`}>
          <div className="cursor-pointer text-blue-500 font-medium underline-offset-2 hover:underline gap-2 flex items-center mt-4">
            Learn More
            <HiArrowSmRight />
          </div>
        </Link>
        {/* <div className=" absolute bottom-3 left-0">
          <RecipeInfo />
        </div> */}
      </div>
    </div>
  );
};

export default Recipe;
