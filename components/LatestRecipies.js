import Image from "next/image";
import React from "react";
import food from "./img/food.jpg";
import fedi from "./img/img.png";
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
              <div className="flex items-center mt-4">
                <a href="#" className="block relative ">
                  <div className="mx-auto h-14 w-14  overflow-hidden">
                    <Image
                      alt="profil"
                      src={recipe?.creator?.photoURL}
                      width={40}
                      height={40}
                      className=" object-cover rounded-full "
                      layout="responsive"
                    />
                  </div>
                </a>
                <div className="flex flex-col justify-between ml-4 text-sm">
                  <p className="text-gray-800 dark:text-white">
                    {recipe?.creator?.displayName}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestRecipies;
