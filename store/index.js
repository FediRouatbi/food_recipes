import { configureStore } from "@reduxjs/toolkit";
import stepSlice from "./Step";
import newRecipeSlice from "./newRecipe";
import userSlice from "./user";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};
const reducers = combineReducers({
  step: stepSlice,
  newRecipe: newRecipeSlice,
  user: userSlice,
});
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export default store;
export const persistor = persistStore(store);
