import React from "react";
import SignupForm from "../components/SignupForm";
import { signupUser } from "../store/firebaseFunctions";
const signup = () => {
  return <SignupForm signupUser={signupUser} />;
};

export default signup;
