import React from "react";

const Pager = ({ pages, prevPage, nextPage, goToPage, currentPage }) => {
  const arraOfPages = [];
  for (let i = 0; i < pages; i++) arraOfPages.push(i + 1);

  return (
    <div className="flex items-center max-w-xs mt-16 mx-auto">
      {currentPage > 1 && (
        <button
          onClick={prevPage}
          type="button"
          className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
        >
          <svg
            width="9"
            fill="currentColor"
            height="8"
            className=""
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
      )}
      {arraOfPages?.map((page) => (
        <button
          onClick={() => goToPage(page)}
          key={page}
          type="button"
          className={`w-full px-4 ${
            currentPage === page ? "bg-indigo-100" : "bg-white"
          }   py-2 border-t border-b  text-base  text-indigo-500  hover:bg-gray-100 `}
        >
          {page}
        </button>
      ))}

      <button
        onClick={nextPage}
        type="button"
        className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"
      >
        <svg
          width="9"
          fill="currentColor"
          height="8"
          className=""
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
        </svg>
      </button>
    </div>
  );
};

export default Pager;
