import React from "react";
import { NativeBaseProvider } from "native-base";
import "./i18n";
import customTheme from "./src/theme";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { OnBoardingScreen } from "./src/screens";
import RootNavigator from "./src/navigation/RootNavigator";

const navigationRef = createNavigationContainerRef();
export default function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef}>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
