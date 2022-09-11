import React from "react";
import Image from "next/image";
import useSWR from "swr";
import { useRouter } from "next/router";
import Spinner from "../../components/Spinner";
import Head from "next/head";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const UserProfile = ({}) => {
  const router = useRouter();
  const { data, error } = useSWR(`/api/${router.asPath}`, fetcher);
  if (!data)
    return (
      <div className="mt-20 mx-auto">
        <div className="  shadow-lg rounded-2xl w-80 bg-white dark:bg-gray-800">
          <div className="pt-20 animate-pulse flex flex-col items-center justify-center p-4 ">
            <div className="block relative h-16 w-16 rounded-full bg-gray-300 border-2 border-white dark:border-gray-800"></div>
            <p className=" dark:text-white text-xl font-medium mt-2 w-24 h-6 bg-gray-300 rounded-md"></p>

            <p className="   mt-5 w-40 h-6 bg-gray-300 rounded-md "></p>
            <p className=" mt-5    w-40 h-6 bg-gray-300 rounded-md"></p>
          </div>
        </div>
      </div>
    );
  const user = data.data;
  return (
    <>
      <Head>
        <title>{user.displayName}</title>
      </Head>
      <div className="mt-20 mx-auto">
        <div className="  shadow-lg rounded-2xl w-80 bg-white dark:bg-gray-800">
          <p alt="profil" className="rounded-t-lg h-28 w-full mb-4" />
          <div className="flex flex-col items-center justify-center p-4 -mt-16">
            <div className="block relative h-16 w-16  border-2 border-white dark:border-gray-800">
              <Image
                alt="profil"
                src={user?.photoURL}
                layout="fill"
                className="mx-auto object-cover rounded-full "
              />
            </div>
            <p className="text-gray-800 dark:text-white text-xl font-medium mt-2">
              {user?.displayName}
            </p>

            <p className="text-sm  p-2 mt-5 bg-pink-500 text-white px-4 rounded-full">
              {user?.email}
            </p>
            <p className="text-sm p-2 mt-5    px-4 rounded-full">
              Phone number : {user?.phoneNumber}
            </p>
            <p className="text-sm p-2 mt-5  text-center  px-4 rounded-full">
              {user?.about}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
