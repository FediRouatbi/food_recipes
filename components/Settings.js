import React, { useRef, useState } from "react";
import Image from "next/image";
import Spinner from "./Spinner";
import UserIcon from "./img/user.svg";
import notification from "../utils/toast";
const SettingsForm = ({
  user,
  changePassword,
  changeProfileInfo,
  updateImage,
}) => {
  const emailRef = useRef();
  const paswwordRef = useRef();
  const nameRef = useRef();
  const numberRef = useRef();
  const photoRef = useRef();
  const bioRef = useRef();
  const [image, setImage] = useState(null);
  const [change, setChange] = useState(false);
  const [edit, setEdit] = useState(false);
  const [save, setSave] = useState(false);
  const switchEdit = () => {
    setEdit((prev) => !prev);
  };
  const updatePassword = async (e) => {
    try {
      e.preventDefault();
      setChange(true);
      const password = paswwordRef.current.value;
      if (password) {
        await changePassword(password);
        notification("success", "Password change successfully");
      }
    } catch (err) {
      notification("error", err.message);
    }
    paswwordRef.current.value = "";
    setChange(false);
  };

  const updateUserInfo = async (e) => {
    try {
      if (e) e.preventDefault();
      setSave(true);
      const number = numberRef.current.value;
      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const about = bioRef.current?.value;
      if (number || name || email || about || photoRef.current.files[0]) {
        await changeProfileInfo(name, email, number, about);
        notification("success", "Profile Info change successfully");
      }
    } catch (err) {
      notification("error", err.message);
    }
    numberRef.current.value = "";
    nameRef.current.value = "";
    emailRef.current.value = "";
    photoRef.current.value = "";
    if (bioRef.current?.value) bioRef.current.value = "";
    setSave(false);
    setEdit(false);
  };
  const saveBio = () => {
    setEdit(false);
    if (user.about !== bioRef.current.value) updateUserInfo();
  };
  const updateProfileImage = async () => {
    try {
      const photo = photoRef.current.files[0];
      const url = await updateImage(photo);
      setImage(url);
      notification(
        "success",
        "The new picture looks great 😃 click save to update your Profile Picture "
      );
    } catch (err) {
      notification("error", err.message);
    }
  };
  return (
    <section className="text-gray-600 body-font mt-20 mb-10 ">
      <div className="container  mx-auto flex flex-col">
        <div className=" px-8  mx-auto max-w-[90rem] w-full">
          <div className="flex flex-col gap-3 sm:flex-row mt-10 relative">
            <div className=" w-full md:w-2/6  text-center sm:pr-8 sm:py-8">
              <label className="cursor-pointer w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <Image
                  src={image || user?.photoURL || UserIcon}
                  className="object-cover object-center rounded-full  z-10 "
                  alt="user image"
                  width={70}
                  height={70}
                  layout="fixed"
                />

                <input
                  type="file"
                  className="hidden"
                  ref={photoRef}
                  onChange={updateProfileImage}
                />
              </label>
              <div className="flex flex-col  items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  {user?.displayName}
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                {edit ? (
                  <>
                    <textarea
                      type="text"
                      defaultValue={user?.about}
                      className="  p-4 min-h-[130px] w-full mb-6 "
                      ref={bioRef}
                      autoFocus={true}
                    />
                    <div className="flex gap-2 mb-10 self-start">
                      <button
                        onClick={saveBio}
                        className="py-2 px-4 flex items-center justify-center gap-2  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      >
                        Save
                      </button>
                      <button
                        onClick={switchEdit}
                        className=" text-white bg-pink-600 p-2 self-end rounded-md active:scale-95 transition-all "
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <p className="text-base cursor-pointer " onClick={switchEdit}>
                    {user?.about || "Press here to add your About section"}
                  </p>
                )}
              </div>
            </div>

            <div className="  bg-opacity-50 mx-auto w-4/6 ">
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
                            type="tel"
                            id="user-info-phone"
                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder={user?.phoneNumber || "Phone number"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                    <button
                      onClick={updateUserInfo}
                      type="submit"
                      className="py-2 px-4 flex items-center justify-center gap-2  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      {save && <Spinner size={20} />} Save
                    </button>
                  </div>
                  <hr />
                  <div className="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                    <h2 className="max-w-sm mx-auto md:w-4/12">
                      Change password
                    </h2>
                    <div className="w-full max-w-sm pl-2 mx-auto space-y-5 md:w-5/12  md:inline-flex">
                      <div className=" relative ">
                        <input
                          ref={paswwordRef}
                          type="password"
                          id="user-info-password"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="text-center md:w-3/12 ">
                      <button
                        type="button"
                        onClick={updatePassword}
                        className=" w-full min-w-[150px] py-2 px-4 flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      >
                        {change && <Spinner size={20} />} Change
                      </button>
                    </div>
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
