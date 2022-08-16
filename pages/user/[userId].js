import React from "react";
import mongoose from "mongoose";
import Image from "next/image";
import User from "../../store/userSchema";
const UserProfile = ({ user }) => {
  console.log(user);
  return (
    <div className="mt-20 mx-auto">
      <div className=" shadow-lg rounded-2xl w-80 bg-white dark:bg-gray-800">
        <p alt="profil" className="rounded-t-lg h-28 w-full mb-4" />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a
            href="#"
            className="block relative h-16 w-16  border-2 border-white dark:border-gray-800"
          >
            <Image
              alt="profil"
              src={user.photoURL}
              layout="fill"
              className="mx-auto object-cover rounded-full "
            />
          </a>
          <p className="text-gray-800 dark:text-white text-xl font-medium mt-2">
            {user.displayName}
          </p>
          <p className="text-gray-400 text-xs mb-4">Nantes</p>
          <p className="text-xs p-2 bg-pink-500 text-white px-4 rounded-full">
            {user.email}
          </p>
          <div className="rounded-lg p-2 w-full mt-4">
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-200">
              <p className="flex flex-col">
                Articles
                <span className="text-black dark:text-white font-bold">34</span>
              </p>
              <p className="flex flex-col">
                Followers
                <span className="text-black dark:text-white font-bold">
                  455
                </span>
              </p>
              <p className="flex flex-col">
                Rating
                <span className="text-black dark:text-white font-bold">
                  9.3
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

export async function getStaticPaths() {
  await mongoose.connect(process.env.MONGO_URL);
  const usersId = await User.find({}).select({ _id: 1 });

  return {
    fallback: true,
    paths: usersId.map((el) => ({ params: { userId: el._id } })),
  };
}
export async function getStaticProps(context) {
  await mongoose.connect(process.env.MONGO_URL);
  let user = await User.find({ _id: context.params.userId });
  mongoose.connection.close();
  user = JSON.parse(JSON.stringify(user)).pop();
  return { props: { user } };
}
