import { ViewStyle } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "native-base";

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
}

const SafeArea = ({ children, style, ...rest }: Props) => {
  return (
    <>
      {/* <StatusBar {...rest} /> */}
      <SafeAreaView style={[{ flex: 1 }, style]}>{children}</SafeAreaView>
    </>
  );
};

export default SafeArea;
