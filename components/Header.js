import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaUserAlt } from "react-icons/fa";
import recipes from "./img/recipes.svg";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import { logout } from "../store/firebaseFunctions";

const Header = () => {
  const dropdownRef = useRef();
  const [showMenu, setshowMenu] = useState(false);
  const user = useSelector((state) => state.user.user);
  const [showLinks, setShowLinks] = useState(false);
  const router = useRouter();
  const pathname = router.pathname;
  const variants = {
    open: { opacity: 1, y: 0, height: "100%" },
    closed: { opacity: 0, scale: 0, y: "-100%", height: "0" },
  };
  const logoutUser = () => {
    router.replace("/");
    logout();
  };
  const closeNav = () => {
    setShowLinks(false);
  };
  useEffect(() => {
    if (!showMenu) return;
    function handleClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setshowMenu(false);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [showMenu]);
  return (
    <nav className="bg-white/95 dark:bg-gray-800  shadow  fixed w-full z-40 ">
      <div className="max-w-[90rem] mx-auto px-8 z-40 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image
              src={recipes}
              height={50}
              width={50}
              className="fill-indigo-500 text-red-800	"
              alt="cooking book "
            />
            <h1 className="text-2xl font-bold">Food recipes</h1>
          </div>

          <div className=" flex items-center text-2xl ">
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4 gap-3 ">
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

                <Link href="/contact">
                  <span
                    className={`link ${
                      pathname === "/contact" && "text-gray-800"
                    }`}
                  >
                    Contact
                  </span>
                </Link>
                {user?.uid && (
                  <Link href="/newrecipe">
                    <button
                      type="button"
                      className="   focus:ring-4 focus:outline-none hover:bg-indigo-500 hover:text-white transition-all ease-in-out duration-500 focus:ring-purple-300 dark:focus:ring-purple-800 border-2 shadow-sm rounded-md  border-indigo-500 font-medium  text-sm px-5 py-2.5 text-center  "
                    >
                      Create Recipe
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {user?.uid ? (
            <div className="relative  cursor-pointer ">
              <div
                ref={dropdownRef}
                onClick={() => setshowMenu((prv) => !prv)}
                className="flex flex-col justify-center items-center group"
              >
                {user.photoURL ? (
                  <Image
                    className=" rounded-full flex z-10  group-active:scale-95"
                    src={user.photoURL}
                    alt="Default avatar"
                    height={37}
                    width={37}
                  ></Image>
                ) : (
                  <FaUserAlt
                    size={40}
                    className="cursor-pointer   border-2 border-gray-600 rounded-full p-1  "
                  />
                )}
                <div className="flex group-hover:text-slate-600 text-slate-500   font-bold ">
                  <span>Me</span>
                  <TiArrowSortedDown size={20} className="self-end" />
                </div>
              </div>
              <span
                className={`${
                  showMenu ? "" : "hidden"
                } w-46 text-lg cursor-default   z-20 overflow-hidden flex flex-col  bottom-0 translate-y-full  -translate-x-full  left-0  absolute  bg-white rounded-md shadow-md `}
              >
                <div className="p-4 text-sm">
                  <div>{user.displayName}</div>
                  <div className="font-bold text-gray-400">{user.email}</div>
                </div>
                <Link href="/settings">
                  <span className="  font-bold flex justify-center items-center  gap-2 cursor-pointer p-2 text-center hover:bg-slate-400">
                    <FiSettings /> Settings
                  </span>
                </Link>
                <button
                  onClick={logoutUser}
                  className=" font-bold flex justify-center items-center  gap-2 p-2 hover:bg-slate-400"
                >
                  <FiLogOut />
                  Logout
                </button>
              </span>
            </div>
          ) : (
            <Link href="/login">
              <span className="hidden md:block cursor-pointer flex-shrink-0 mr-2 px-4 py-2 text-base font-semibold text-white bg-indigo-500 rounded shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
                Login
              </span>
            </Link>
          )}
          <div className="-mr-2 flex md:hidden ">
            <button
              className="link"
              onClick={() => setShowLinks((prev) => !prev)}
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="h-8 w-8"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ type: "Spring" }}
        variants={variants}
        animate={showLinks ? "open" : "closed"}
        className="md:hidden h-full"
      >
        <div className="flex flex-col items-start px-2 pt-2 pb-3 space-y-1 sm:px-3 w-fit">
          <Link href="/">
            <span
              onClick={closeNav}
              className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </span>
          </Link>
          <Link href="/recipes">
            <span
              onClick={closeNav}
              className="text-gray-300 hover:text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Recipes
            </span>
          </Link>

          <Link href="/contact">
            <span
              onClick={closeNav}
              className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2  text-base font-medium"
            >
              Contact
            </span>
          </Link>
          {!user?.uid && (
            <Link href="/login">
              <span
                onClick={closeNav}
                className=" text-center md:block cursor-pointer flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-indigo-500 rounded shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
              >
                Login
              </span>
            </Link>
          )}
        </div>
      </motion.div>
    </nav>
  );
};

export default Header;
