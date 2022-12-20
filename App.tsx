import "./i18n";

import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";

import { NativeBaseProvider } from "native-base";
import React from "react";
import RootNavigator from "./src/navigation/RootNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import customTheme from "./src/theme";

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
