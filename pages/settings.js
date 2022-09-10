import React from "react";
import SettingsForm from "../components/Settings";
import { useSelector } from "react-redux";
import {
  changePassword,
  changeProfileInfo,
  updateImage,
} from "../utils/SettingsUtils";
const Settings = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <SettingsForm
      user={user}
      changePassword={changePassword}
      changeProfileInfo={changeProfileInfo}
      updateImage={updateImage}
    />
  );
};

export default Settings;
