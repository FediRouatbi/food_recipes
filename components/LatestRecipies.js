import Image from "next/image";
import React from "react";
const LatestRecipies = ({ recipes }) => {
  return (
    <section className="w-full bg-white p-12 px-8 max-w-[90rem] mx-auto">
      <div className="header flex items-end justify-between mb-12 ">
        <div className="title">
          <p className="text-4xl font-bold text-gray-800 mb-4">
            Lastest recipies :
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="min-w-[256px]  overflow-hidden shadow-lg rounded-lg  cursor-pointer m-auto"
          >
            <div className="relative   w-full md:w-80  h-52">
              <Image
                alt="blog photo"
                src={recipe?.image}
                className=" object-cover"
                layout="fill"
              />
            </div>
            <div className="bg-white dark:bg-gray-800 w-full md:w-80  p-4">
              <p className="text-indigo-500 text-md font-medium"></p>
              <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                {recipe?.name}{" "}
                <span className="text-gray-400 text-xs dark:text-gray-300">
                  {recipe.createdAt}
                </span>
              </p>
              <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                {recipe?.about}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestRecipies;
