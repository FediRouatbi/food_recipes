import Head from "next/head";
import React from "react";
import SignupForm from "../components/SignupForm";
import { signupUser } from "../store/firebaseFunctions";
const signup = () => {
  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <SignupForm signupUser={signupUser} />
    </>
  );
};

export default signup;
