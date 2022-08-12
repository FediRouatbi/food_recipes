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
console.log(auth);
export const loginUser = async (username, email, password) => {
  try {
    const resp = await signInWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: username,
    });
    store.dispatch(userActions.login({ username, email }));
  } catch (error) {
    throw new Error(error);
  }
};

export const githubLogin = async () => {
  try {
    const credential = await signInWithPopup(auth, githubProvider);
    const user = credential.user;
    const username = user.displayName;
    const email = user.email;
    const image = user.photoURL;
    store.dispatch(userActions.login({ username, email, image }));
  } catch (error) {
    throw new Error(error);
  }
};
export const googleLogin = async () => {
  try {
    const credential = await signInWithPopup(auth, googleProvider);
    const user = credential.user;
    const username = user.displayName;
    const email = user.email;
    const image = user.photoURL;

    store.dispatch(userActions.login({ username, email, image }));
  } catch (error) {
    throw new Error(error);
  }
};
