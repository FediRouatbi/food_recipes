import { updateProfile } from "firebase/auth";
import auth from "./firebaseConfig";
import store from "./index";
import { userActions } from "./user";

async function updateUserInfo() {
  const { user } = store.getState();
  const storage = getStorage();
  const storageRef = ref(storage, `/profileImages/${user.user.uid}.jpg`);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
}
