import store from "../store/index";
import axios from "axios";
const { user } = store.getState();
export const newComment = async (text, recipeId) => {
  const userName = user.user.displayName;
  const image = user.user.photoURL;
  const comment = {
    id: recipeId,
    user: userName,
    image,
    text,
  };
  await axios.post("/api/comment/new-comment", comment);
  return comment;
};
export const deleteComment = async (commentId) => {
  await axios.delete(`/api/comment/${commentId}`);
};
export const updateComment = async (commentId, text) => {
  await axios.patch(`/api/comment/${commentId}`, {
    text,
  });
};
