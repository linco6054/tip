import React from "react";
import MainRoutes from "./MainRoutes/MainRoutes";
import AuthRoutes from "./AuthRoutes";

const RootNavigator = () => {
  const isLOggedIn = false;
  return isLOggedIn ? <MainRoutes /> : <AuthRoutes />;
};

export default RootNavigator;
