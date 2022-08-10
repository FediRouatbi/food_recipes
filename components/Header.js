import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import cookingBook from "./img/cooking-book.png";
const Header = () => {
  return (
    <nav className="bg-white dark:bg-gray-800  shadow  ">
      <div className="max-w-[90rem] mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image
              src={cookingBook}
              height={50}
              width={50}
              alt="cooking book"
            />
            <h1 className="text-2xl font-bold">Food recipe</h1>
          </div>

          <div className=" flex items-center text-2xl ">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 gap-3">
                <Link
                  className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  href="/recipes"
                >
                  Recipes
                </Link>
                <Link
                  className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  href="/home"
                >
                  Content
                </Link>
                <Link
                  className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  href="/contact"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="h-8 w-8"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <Link href="/newrecipe">
              <span className="cursor-pointer flex-shrink-0 mr-2 px-4 py-2 text-base font-semibold text-white bg-indigo-500 rounded shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
                Create new Recipe
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
            href="/home"
          >
            Gallery
          </Link>
          <Link
            className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            href="/"
          >
            Content
          </Link>
          <Link
            className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            href="/home"
          >
            Contact
          </Link>
        </div>
        <div className="p-2 flex">
          <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
            <div className=" relative ">
              <input
                type="text"
                id='"form-subscribe-Search'
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="components"
              />
            </div>
            <button
              className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
              type="submit"
            >
              Search
            </button>
          </form>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
