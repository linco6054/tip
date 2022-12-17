import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnBoardingScreen } from "../screens";

export type AuthStackParamsList = {
  onboarding: undefined;
  loginScreen: undefined;
};
const AuthStack = createNativeStackNavigator<AuthStackParamsList>();

const AuthRoutes = () => {
  const isOnboarded = false;
  return (
    <AuthStack.Navigator
      initialRouteName={isOnboarded ? "loginScreen" : "onboarding"}
      screenOptions={{
        headerShown: false,
        title: "",
        animation: "none",
      }}
    >
      {!isOnboarded && (
        <AuthStack.Screen name="onboarding" component={OnBoardingScreen} />
      )}
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
