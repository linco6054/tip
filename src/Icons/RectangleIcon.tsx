import React from "react";
import { SvgCss } from "react-native-svg";
import { SvgIconProps } from "./types";

const xml = (props: SvgIconProps) => {
  const { width = 299, height = 492, fill = "#F1F1F1" } = props;
  return `
<svg width="${width}" height="${height}" viewBox="0 0 299 492" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H17.8571C173.128 0 299 125.872 299 281.143C299 397.596 204.596 492 88.1429 492H0V0Z" fill="${fill}"/>
</svg>


     `;
};

const RectangleIcon = (props: SvgIconProps) => <SvgCss xml={xml(props)} />;

export default RectangleIcon;
