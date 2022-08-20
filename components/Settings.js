import React, { useRef } from "react";
import Image from "next/image";
const SettingsForm = ({ user }) => {
  const emailRef = useRef();
  const paswwordRef = useRef();
  const nameRef = useRef();
  const numberRef = useRef();
  const photoRef = useRef();
  const bioRef = useRef();

  return (
    <section className="text-gray-600 body-font mt-20 mb-10">
      <div className="container  mx-auto flex flex-col">
        <div className=" px-8  mx-auto max-w-[90rem]">
          <div className="flex flex-col sm:flex-row mt-10 relative">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <label className="cursor-pointer w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                {user?.photoURL && (
                  <Image
                    src={user?.photoURL}
                    className="object-cover object-center rounded-full   "
                    alt="user image"
                    width={70}
                    height={70}
                    layout="fixed"
                  />
                )}
                <input type="file" className="hidden" ref={photoRef} />
              </label>
              <div className="flex flex-col   items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  {user?.displayName}
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">{user?.about}</p>
              </div>
            </div>
            <button
              type="button"
              className="hidden sm:block py-2 absolute  bottom-2 left-2  px-4 mt-auto bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Delete Account
            </button>

            <div className="  bg-opacity-50 flex-grow">
              <form className="container max-w-2xl mx-auto shadow-md ">
                <div className="space-y-6 bg-white">
                  <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                    <h2 className="max-w-sm mx-auto md:w-1/3">Account</h2>
                    <div className="max-w-sm mx-auto md:w-2/3">
                      <div className=" relative ">
                        <input
                          ref={emailRef}
                          type="text"
                          id="user-info-email"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder={user?.email}
                        />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                    <h2 className="max-w-sm mx-auto md:w-1/3">Personal info</h2>
                    <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                      <div>
                        <div className=" relative ">
                          <input
                            ref={nameRef}
                            type="text"
                            id="user-info-name"
                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder={user?.displayName}
                          />
                        </div>
                      </div>
                      <div>
                        <div className=" relative ">
                          <input
                            ref={numberRef}
                            type="text"
                            id="user-info-phone"
                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder={user?.phoneNumber || "Phone number"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                    <h2 className="max-w-sm mx-auto md:w-4/12">
                      Change password
                    </h2>
                    <div className="w-full max-w-sm pl-2 mx-auto space-y-5 md:w-5/12 md:pl-9 md:inline-flex">
                      <div className=" relative ">
                        <input
                          ref={paswwordRef}
                          type="text"
                          id="user-info-password"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="text-center md:w-3/12 md:pl-6">
                      <button
                        type="button"
                        className="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      >
                        Change
                      </button>
                    </div>
                  </div>
                  <hr />
                  <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                    <button
                      type="submit"
                      className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingsForm;
