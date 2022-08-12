import {
  createUserWithEmailAndPassword,
  updateProfile,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "../store/firebaseConfig";
import store from "./index";
import { userActions } from "./user";
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const loginHandler = async (username, email, password) => {
  try {
    const resp = await signInWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: username,
    });
    store.dispatch(userActions.login({ username, email }));
  } catch (error) {
    console.log(error);
  }
};

export const githubLoginHandler = async () => {
  try {
    const credential = await signInWithPopup(auth, githubProvider);
    const user = credential.user;
    const username = user.displayName;
    const email = user.email;
    const image = user.photoURL;
    store.dispatch(userActions.login({ username, email, image }));
  } catch (error) {
    console.log(error);
  }
};
export const googleLoginHandler = async () => {
  try {
    const credential = await signInWithPopup(auth, googleProvider);
    const user = credential.user;
    const username = user.displayName;
    const email = user.email;
    const image = user.photoURL;

    store.dispatch(userActions.login({ username, email, image }));
  } catch (error) {
    console.log(error);
  }
};
