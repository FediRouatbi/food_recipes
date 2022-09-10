import Image from "next/image";
import Link from "next/link";
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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 ">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="min-w-[256px] h-full  overflow-hidden shadow-lg rounded-lg  m-auto"
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
              <Link href={`recipes/${recipe.id}`}>
                <p className="cursor-pointer  hover:text-indigo-500 hover:underline underline-offset-2 text-gray-800 dark:text-white text-xl font-medium ">
                  {recipe?.name}{" "}
                </p>
              </Link>{" "}
              <span className="text-gray-400 text-xs dark:text-gray-300">
                On {recipe.createdAt.slice(0, 10)} At{" "}
                {recipe.createdAt.slice(-13, -5)}
              </span>
              <p className="text-gray-400 dark:text-gray-300 font-light text-lg">
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
