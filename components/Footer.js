import Image from "next/image";
import React from "react";
import cookingBook from "./img/cooking-book.png";
const Footer = () => {
  return (
    <footer className="bg-gray-100 body-font mt-auto ">
      <div className="container px-5 py-6 mx-auto flex items-center justify-center sm:flex-row flex-col">
        <div className="flex items-center">
          <Image src={cookingBook} height={50} width={50} alt="cooking book" />
          <h1 className="text-2xl font-bold">Food recipe</h1>
        </div>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2022 —
          <a
            href="https://www.linkedin.com/in/fedi-rouatbi-93554b195/"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @Rouatbi
          </a>
        </p>
        <span className="inline-flex sm:ml-auto gap-4 sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://v2--rouatbi-portfolio.netlify.app/"
          >
            <span className="cursor-pointer fill-gray-500  hover:fill-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="w-[26px] h-[26px]"
                viewBox="0 0 50 50"
              >
                <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
              </svg>
            </span>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/xCHIVASx/"
          >
            <span className="text-gray-500 cursor-pointer hover:text-gray-600">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-7 h-7"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </span>
          </a>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/fedirouatbi/"
          >
            <span className="text-gray-500 cursor-pointer hover:text-gray-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-7 h-7"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </span>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/fedi-rouatbi-93554b195/"
          >
            <span className="text-gray-500 cursor-pointer hover:text-gray-600">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-7 h-7"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </span>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
