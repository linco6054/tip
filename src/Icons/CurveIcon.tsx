import { Text, View } from "native-base";

import React from "react";
import { SvgIconProps } from "./types";

function CurveIcon(props: SvgIconProps) {
  return (
    <View
      style={{
        backgroundColor: "#ccc",
        borderTopRightRadius: 1500,
        borderBottomRightRadius: 500,
        ...props.style,
      }}
    ></View>
  );
}

export default CurveIcon;
