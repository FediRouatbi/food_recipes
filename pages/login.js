import LoginForm from "../components/LoginForm";
import auth from "../store/firebaseConfig";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  loginHandler,
  githubLoginHandler,
  googleLoginHandler,
} from "../store/loginFunctions";

const login = () => {
 

  return (
    <LoginForm
      loginHandler={loginHandler}
      googleLoginHandler={googleLoginHandler}
      githubLoginHandler={githubLoginHandler}
    />
  );
};

export default login;
