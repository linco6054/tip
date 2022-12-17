import { primary } from "./variants/customButton";
import { extendTheme } from "native-base";
import asyncStorageDAta from "../helpers/storage";

const colors = {
  main: {
    black: "#000000",
    white: "#FFFFFF",
    corporateMain: asyncStorageDAta.getMainColor(),
    corporateSub: asyncStorageDAta.getSubColor(),
    gray: {
      1: "#F1F1F1",
      2: "#CFCFCF",
      3: "#3F3D56",
      4: "#5E5E5E",
      6: "#646464",
    },
  },
};
const fontSizes = {
  titleLarge: "36px",
  title: "24px",
  body: "18px",
  Button: "16px",
  subtitle: "14px",
  caption: "12px",
  overline: "10px",
};
interface IConfig {
  useSystemColorMode: boolean;
  initialColorMode: "light";
}

const config: IConfig = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

const customTheme = extendTheme({
  fontSizes,
  config,
  colors,
  components: {
    Button: {
      baseStyle: { size: "button" },
      variants: {
        primary,
      },
    },
  },
});
export default customTheme;
