import Image from "next/image";
import React from "react";
import RecipeInfo from "../RecipeInfo";
import { useRouter } from "next/router";
const Recipe = ({ recipe }) => {
  const route = useRouter();
  const showDetail = () => {
    route.push(`/${recipe.id}`);
  };
  return (
    <div className="my-8 flex md:gap-10 gap-0 flex-col rounded-md sm:flex-row shadow-md items-center hover:shadow-lg transition-all">
      <div className=" relative justify-self-center  w-full flex flex-col max-w-[200px] max-h-60 h-44">
        <Image
          className="object-cover brightness-[0.9] z-20 object-center md:rounded-l rounded-t md:rounded-r-none  "
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
        <a
          onClick={showDetail}
          className="cursor-pointer text-indigo-500 inline-flex items-center mt-4"
        >
          Learn More
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
        {/* <div className=" absolute bottom-3 left-0">
          <RecipeInfo />
        </div> */}
      </div>
    </div>
  );
};

export default Recipe;
