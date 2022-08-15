import React from "react";
import Image from "next/image";
import { SiCodechef } from "react-icons/si";
import { MdTimer } from "react-icons/md";
const AllAboutRecipe = ({ recipe }) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container p-5 my-24   mx-auto flex flex-col lg:w-4/5">
        <div className=" w-full flex flex-col md:flex-row  justify-center ">
          <div className="w-60  relative h-60 self-center">
            {recipe?.image && (
              <Image
                alt="ecommerce"
                className=" object-cover object-center rounded"
                src={recipe?.image}
                layout="fill"
              />
            )}
          </div>
          <div className="  flex-grow flex flex-col   md:pl-10  mt-6 md:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-bold mb-1">
              {recipe?.name}
            </h1>

            <p className="leading-relaxed max-w-xl">{recipe?.about}</p>
            <p className="mt-5">
              <div>
                Created By : <span>{recipe?.creator?.displayName}</span>{" "}
              </div>
              <div>On: {recipe?.createdAt.slice(0, 10)}</div>
            </p>
            <div className="flex justify-around mt-auto py-2">
              <div className="flex gap-1 items-center">
                <SiCodechef size={30} /> {recipe?.difficulty}
              </div>
              <div className="flex gap-1 items-center">
                <MdTimer size={30} /> {recipe?.timeToCook}
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-20 mt-10 items-start">
          <div>
            <h1 className="shadow-md text-center font-semibold text-white text-2xl px-8 py-5 bg-indigo-500 rounded-lg">
              Ingredients :
            </h1>
            <ul className="mt-10 space-y-3">
              {recipe?.ingredients.map((el) => (
                <li
                  key={el.id}
                  className=" bg-slate-400 font-semibold  ring-2 ring-gray-900 rounded-sm p-2 text-white"
                >
                  <span>{el.quantity}</span> {el.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h1 className="shadow-md text-center font-semibold text-white text-2xl px-8 py-5 bg-indigo-500 rounded-lg">
              Method :
            </h1>
            <ul className="mt-10 space-y-5">
              {recipe?.methods.map((el, i) => (
                <li key={el.id} className="">
                  <span className="text-3xl">{i + 1}.</span>
                  {el.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllAboutRecipe;
