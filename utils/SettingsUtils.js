import { updateProfile, updatePassword, updateEmail } from "firebase/auth";
import auth from "../store/firebaseConfig";
import store from "../store";
import axios from "axios";
import { userActions } from "../store/user";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
let url;
export async function updateImage(newProfileImage) {
  try {
    const { user } = store.getState();
    const storage = getStorage();
    const storageRef = ref(storage, `/profileImages/${user.user.uid}.jpg`);
    await uploadBytes(storageRef, newProfileImage);
    url = await getDownloadURL(storageRef);
    return url;
  } catch (err) {
    throw new Error(err);
  }
}
export async function changePassword(newPassword) {
  try {
    await updatePassword(auth.currentUser, newPassword);
  } catch (err) {
    throw new Error(err);
  }
}

export async function changeProfileInfo(
  newName,
  newEmail,
  newPhoneNumber,
  about
) {
  try {
    if (newEmail) await updateEmail(auth.currentUser, newEmail);
    if (newName)
      await updateProfile(auth.currentUser, { displayName: newName });
    if (url) await updateProfile(auth.currentUser, { photoURL: url });
    const user = {
      ...(url && { photoURL: url }),
      ...(newName && { displayName: newName }),
      ...(newEmail && { email: newEmail }),
      ...(newPhoneNumber && { phoneNumber: newPhoneNumber }),
      ...(about && { about: about }),
    };
    await axios.patch(`/api/user/${auth.currentUser.uid}`, { ...user });
    store.dispatch(userActions.update(user));
  } catch (err) {
    throw new Error(err);
  }
}
