import React from "react";
import SettingsForm from "../components/Settings";
import { useSelector } from "react-redux";
import {
  changePassword,
  changeProfileInfo,
  updateImage,
} from "../utils/SettingsUtils";
import Head from "next/head";
const Settings = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      <SettingsForm
        user={user}
        changePassword={changePassword}
        changeProfileInfo={changeProfileInfo}
        updateImage={updateImage}
      />
    </>
  );
};

export default Settings;
