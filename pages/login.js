import LoginForm from "../components/LoginForm";
import {
  loginUser,
  githubLogin,
  googleLogin,
} from "../store/firebaseFunctions";
import { useRouter } from "next/router";
const Login = () => {
  const pushTo = useRouter().push;
  const loginHandler = async (email, password) => {
    try {
      await loginUser(email, password);
      pushTo("/newrecipe");
    } catch (error) {
      throw new Error(error);
    }
  };
  const googleLoginHandler = async () => {
    try {
      await googleLogin();
      pushTo("/newrecipe");
    } catch (error) {
      console.log(error);
    }
  };
  const githubLoginHandler = async () => {
    try {
      await githubLogin();
      pushTo("/newrecipe");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <LoginForm
      loginHandler={loginHandler}
      googleLoginHandler={googleLoginHandler}
      githubLoginHandler={githubLoginHandler}
    />
  );
};

export default Login;

export function getStaticProps() {
  return { props: {} };
}
