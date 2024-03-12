/* eslint-disable @typescript-eslint/no-unused-vars */
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: "light" | "dark";
    fonts: {
      family: string;
    };
    spacing: typeof spacing;
    padding: typeof padding;
    color: typeof color;
    borderRadius: typeof borderRadius;
    boxShadow: typeof boxShadow;
    typography: typeof typography;
  }
}

const baseColors = {
  white: "#ffffff",
  black: "#000000",
  primary: {
    100: "#755bb4",
    200: "#856cbd",
    300: "#947dc5",
    400: "#a48fcd",
    500: "#b3a1d6",
    600: "#c2b3de",
  },
  surface: {
    100: "#2c2c2c",
    200: "#404040",
    300: "#555555",
    400: "#6b6b6b",
    500: "#828282",
    600: "#9a9a9a",
  },
  surfaceMixed: {
    100: "#50436d",
    200: "#62567c",
    300: "#75698c",
    400: "#877d9c",
    500: "#9a91ac",
    600: "#aea6bc",
  },
};

const spaceUnit = 1;

const padding = {
  button: {
    small: {
      x: `${1.5 * spaceUnit}rem`,
      y: `${0.75 * spaceUnit}rem`,
    },
    medium: {
      x: `${2 * spaceUnit}rem`,
      y: `${1 * spaceUnit}rem`,
    },
    large: {
      x: `${3 * spaceUnit}rem`,
      y: `${1.5 * spaceUnit}rem`,
    },
  },
};

const borderRadius = {
  xxs: `${0.175 * spaceUnit}rem`,
  xs: `${0.25 * spaceUnit}rem`,
  s: `${0.375 * spaceUnit}rem`,
  m: `${0.5 * spaceUnit}rem`,
  l: `${0.75 * spaceUnit}rem`,
  xl: `${1 * spaceUnit}rem`,
  xxl: `${2 * spaceUnit}rem`,
  circle: "50%",
};

const spacing = {
  xxs: `${0.25 * spaceUnit}rem`,
  xs: `${0.5 * spaceUnit}rem`,
  s: `${spaceUnit}rem`,
  m: `${1.25 * spaceUnit}rem`,
  l: `${2 * spaceUnit}rem`,
  xl: `${3.25 * spaceUnit}rem`,
  xxl: `${5.25 * spaceUnit}rem`,
};

const boxShadow = {
  card: "0px 14px 26px 0px rgba(0, 0, 0, 0.08)",
  inner: "inset 0 3px 0 0 rgba(0, 0, 0, 0.05)",
  outerBorder: `0 0 0 1px ${baseColors.primary[100]}, 0 0 0 4px ${baseColors.primary[500]}`,
};

const typography = {
  fontSize: {
    body: "1.125rem",
    bodyS: "1rem",
    bodyXS: "0.9rem",
    bodyXXS: "0.72rem",
    heading1: "2.74rem",
    heading2: "2.19rem",
    heading3: "1.75rem",
    heading4: "1.4rem",
  },
  fontWeight: {
    black: "900",
    bold: "700",
    medium: "500",
    regular: "400",
  },
};

const color = {
  accentText: baseColors.white,
  button: {
    primary: {
      background: baseColors.primary[500],
      hover: baseColors.primary[400],
      text: baseColors.black,
    },
    secondary: {
      background: baseColors.surfaceMixed[300],
      hover: baseColors.surfaceMixed[200],
      text: baseColors.white,
    },
    transparent: {
      background: "transparent",
      hover: "transparent",
      text: baseColors.primary[600],
    },
  },
  cardBackground: baseColors.surfaceMixed[200],
  inputBackground: baseColors.surfaceMixed[200],
  primaryText: baseColors.black,
  screenBackground: baseColors.surfaceMixed[100],
  white: baseColors.white,
  black: baseColors.black,

  appBg: baseColors.surfaceMixed[100],
  appContentBg: baseColors.surfaceMixed[100],
  appPreviewBg: baseColors.surfaceMixed[100],
  booleanBg: baseColors.surfaceMixed[300],
  booleanSelectedBg: baseColors.surfaceMixed[300],
  buttonBg: baseColors.surfaceMixed[300],
  buttonBorder: baseColors.surfaceMixed[100],
  colorPrimary: baseColors.surfaceMixed[500],
  colorSecondary: baseColors.surfaceMixed[300],
  fontBase: undefined,
  // fontCode: undefined,
  // inputBg: undefined,
  // inputBorder: undefined,
  // inputBorderRadius: undefined,
  // inputTextColor: undefined,
  // textColor: undefined,
  // textInverseColor: undefined,
};

export const lightTheme: DefaultTheme = {
  borderRadius,
  boxShadow,
  padding,
  color,
  fonts: {
    family: "NunitoSans, sans-serif",
  },
  name: "light",
  spacing,
  typography,
};

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  boxShadow: {
    ...boxShadow,
    outerBorder: `0 0 0 2px ${baseColors.surface[100]}, 0 0 0 4px ${baseColors.surface[600]}`,
  },
  color: {
    ...lightTheme.color,
    button: {
      primary: {
        background: baseColors.surface[500],
        hover: baseColors.surface[400],
        text: baseColors.black,
      },
      secondary: {
        background: baseColors.surface[300],
        hover: baseColors.surface[200],
        text: baseColors.white,
      },
      transparent: {
        background: "transparent",
        hover: "transparent",
        text: baseColors.primary[600],
      },
    },
    cardBackground: baseColors.surface[200],
    inputBackground: baseColors.surface[200],
    primaryText: baseColors.white,
    screenBackground: baseColors.surface[100],
    white: baseColors.white,
    black: baseColors.black,
  },
  name: "dark",
};
