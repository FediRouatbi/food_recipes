import LoginForm from "../components/LoginForm";
import { loginUser, githubLogin, googleLogin } from "../store/loginFunctions";
import { useRouter } from "next/router";
const Login = () => {
  const pushTo = useRouter().push;
  const loginHandler = async (username, email, password) => {
    try {
      await loginUser(username, email, password);
      pushTo("/newrecipe");
    } catch (error) {}
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
