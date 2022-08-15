import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import auth from "./firebaseConfig";
import store from "./index";
import { userActions } from "./user";
import { newRecipeActions } from "./newRecipe";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const getImageUrl = async (file, id) => {
  const storage = getStorage();
  const storageRef = ref(storage, `/recipes/${id}.jpg`);

  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  store.dispatch(newRecipeActions.updateImage(url));

  console.log(url);
};
const signInUser = (user) => {
  store.dispatch(
    userActions.login({
      uid: user.uid,
      displayName: user.displayName,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      email: user.email,
    })
  );
};

export const signupUser = async (fullName, email, password) => {
  try {
    const resp = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: fullName });
    signInUser(resp.user);
  } catch (error) {
    throw new Error(error);
  }
};
export const loginUser = async (email, password) => {
  try {
    const resp = await signInWithEmailAndPassword(auth, email, password);

    signInUser(resp.user);
  } catch (error) {
    throw new Error(error);
  }
};

export const githubLogin = async () => {
  try {
    const credential = await signInWithPopup(auth, githubProvider);
    const user = credential.user;

    signInUser(user);
  } catch (error) {
    throw new Error(error);
  }
};
export const googleLogin = async () => {
  try {
    const credential = await signInWithPopup(auth, googleProvider);
    const user = credential.user;

    signInUser(user);
  } catch (error) {
    throw new Error(error);
  }
};

export const resetPassword = async (email) => {
  await sendPasswordResetEmail(auth, email);
};
export const logout = async () => {
  await signOut(auth);
  store.dispatch(userActions.logout());
};
