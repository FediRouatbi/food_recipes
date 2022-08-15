import React from "react";
import Image from "next/image";
const ImageInput = ({ getImage, image }) => {
  return (
    <main className="flex  items-center justify-center  font-sans">
      <label
        htmlFor="dropzone-file"
        className="mx-auto min-h-[200px] cursor-pointer relative overflow-hidden flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center"
      >
        {image ? (
          <Image src={image} alt="photo" objectFit="contain" layout="fill" />
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              className="fill-blue-500"
            >
              <path d="M19.5 12c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-18 0l4-5.96 2.48 1.96 2.52-4 1.853 2.964c-1.271 1.303-1.977 3.089-1.827 5.036h-9.026zm10.82 4h-14.82v-18h22v7.501c-.623-.261-1.297-.422-2-.476v-5.025h-18v14h11.502c.312.749.765 1.424 1.318 2zm-9.32-11c-.828 0-1.5-.671-1.5-1.5 0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5z" />
            </svg>

            <h2 className="mt-4 text-xl font-medium text-gray-700 tracking-wide">
              Recipe Image
            </h2>

            <p className="mt-2 text-gray-500 tracking-wide">
              Upload your file SVG, PNG, JPG or GIF.
            </p>
          </>
        )}

        <input
          id="dropzone-file"
          type="file"
          onChange={getImage}
          className="hidden"
        />
      </label>
    </main>
  );
};

export default ImageInput;
