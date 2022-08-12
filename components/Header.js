import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FiSettings, FiLogOut } from "react-icons/fi";

import cookingBook from "./img/cooking-book.png";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";

const Header = () => {
  const [showMenu, setshowMenu] = useState(false);
  const user = useSelector((state) => state.user);
  const currentUser = user.user;
  const router = useRouter();
  const pathname = router.pathname;

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
              <div className="ml-10 flex items-baseline space-x-4 gap-3 ">
                <Link className="" href="/">
                  <span
                    className={`link ${pathname === "/" && "text-gray-800"}`}
                  >
                    Home
                  </span>
                </Link>
                <Link href="/recipes">
                  <span
                    className={`link ${
                      pathname === "/recipes" && "text-gray-800"
                    }`}
                  >
                    Recipes
                  </span>
                </Link>
                <Link href="/home">
                  <span
                    className={`link ${
                      pathname === "/home" && "text-gray-800"
                    }`}
                  >
                    Content
                  </span>
                </Link>
                <Link href="/contact">
                  <span
                    className={`link ${
                      pathname === "/contact" && "text-gray-800"
                    }`}
                  >
                    Contact
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {currentUser ? (
            <div className="relative flex">
              <Image
                onClick={() => setshowMenu((prv) => !prv)}
                className=" rounded-full flex cursor-pointer z-10"
                src={user.image}
                alt="Default avatar"
                height={50}
                width={50}
              ></Image>
              <span
                className={`${
                  showMenu ? "" : "hidden"
                } w-46 text-lg  z-20 overflow-hidden flex flex-col  bottom-0 translate-y-full  -translate-x-full  left-0  absolute  bg-white rounded-md shadow-md `}
              >
                <div className="p-4 text-sm">
                  <div>{user.username}</div>
                  <div className="font-bold text-gray-400">{user.email}</div>
                </div>
                <Link href="/settings">
                  <span className=" font-bold flex justify-center items-center  gap-2 cursor-pointer p-2 text-center hover:bg-slate-400">
                    <FiSettings /> Settings
                  </span>
                </Link>
                <button className=" font-bold flex justify-center items-center  gap-2 p-2 hover:bg-slate-400">
                  <FiLogOut />
                  Logout
                </button>
              </span>
            </div>
          ) : (
            <Link href="/login">
              <span className="cursor-pointer flex-shrink-0 mr-2 px-4 py-2 text-base font-semibold text-white bg-indigo-500 rounded shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
                Login
              </span>
            </Link>
          )}
        </div>
        <div className="-mr-2 flex md:hidden">
          <button className="link">
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
      </div>
    </nav>
  );
};

export default Header;
