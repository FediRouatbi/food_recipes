import React from "react";
import SettingsForm from "../components/SettingsForm";
import { useSelector } from "react-redux";

const Settings = () => {
  const user = useSelector((state) => state.user.user);
  
  return <SettingsForm user={user} />;
};

export default Settings;
