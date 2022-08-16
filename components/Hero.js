import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "./img/hero.jpg";
import { useSelector } from "react-redux";

const Hero = () => {
  const currentUser = useSelector((state) => state.user.user);

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto justify-between max-w-[90rem] md:flex-row-reverse flex px-8 py-16  flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 ">
          <Image
            height={450}
            width={500}
            className="object-cover object-center rounded"
            alt="hero"
            src={img}
          />
        </div>

        <div className="  md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 lg:text-5xl lg:font-bold font-medium text-gray-900">
            Enjoy cooking
            <br className="hidden lg:inline-block" />
            <p className="text-base text-gray-500 mt-3 ">
              A Simple Guide to Enjoy Cooking
            </p>
          </h1>
          <p className="mb-8 leading-relaxed">
            Food Recipes is here to help you cook delicious meals with less
            stress and more joy. Find the best recipe ideas discover the one
            that fit your eating preferences, needs, and more.
            <div> Cook with confidence. Enjoy your food.</div>
          </p>
          <div className="flex justify-center">
            <Link href={currentUser?.uid ? "newrecipe" : "login"}>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                New Recipe
              </button>
            </Link>
            <Link href="recipes">
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Find Recipe
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
