import React from "react";
import SettingsForm from "../components/Settings";
import { useSelector } from "react-redux";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Settings = () => {
  const user = useSelector((state) => state.user.user);
  const { data, error } = useSWR(`/api/user/${user.uid}`, fetcher);
  const updateUserInfo = (
    email,
    password,
    phoneNumber,
    photo,
    displayName
  ) => {};

  return <SettingsForm user={data?.data} />;
};

export default Settings;
