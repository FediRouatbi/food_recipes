import Image from "next/image";
import React from "react";
import img from "../img/hero.jpg";
import RecipeInfo from "../RecipeInfo";
const Recipe = () => {
  return (
    <div className="my-8 flex md:gap-10 gap-0 flex-col rounded-md md:flex-row shadow-md hover:shadow-lg transition-all">
      <div className="  justify-self-center  flex flex-col md:max-w-[200px] max-h-60">
        <Image
          className="object-cover object-center md:rounded-l rounded-t md:rounded-r-none  "
          src={img}
          alt="recipe"
          layout=""
        />
      </div>
      <div className="md:flex-grow p-4 relative ">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
          Woke master cleanse drinking vinegar salvia
        </h2>
        <p className="leading-relaxed">
          Glossier echo park pug, church-key sartorial biodiesel vexillologist
          pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag
          selfies, poke vaporware kombucha lumbersexual pork belly polaroid
          hoodie portland craft beer.
        </p>
        <a className="text-indigo-500 inline-flex items-center mt-4">
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
        <div className=" absolute bottom-3 left-0">
          <RecipeInfo />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
