import { PaletteOptions } from "@mui/material/styles/createPalette";

export const LIGHT_PALETTE: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#FF868E",
    light: "rgba(255, 134, 142, 0.6)",
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: "#FBE0DC",
    light: "#FFFFFF",
    contrastText: "#FF868E",
  },
  success: {
    main: "#97EAB9",
    light: "rgba(151, 234, 185, 0.3)",
    contrastText: "#FFFFFF",
  },
  warning: {
    main: "#FFD280",
    light: "rgba(255, 210, 128, 0.3)",
    contrastText: "#FFFFFF",
  },
  text: {
    primary: "#000000",
    secondary: "#8C8C8C",
  },
  background: {
    paper: "#FFFFFF",
    default: "#F8F8F7",
  },
};

export const DARK_PALETTE: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#FF868E",
    light: "rgba(255, 134, 142, 0.6)",
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: "rgba(255, 134, 142, 0.2)",
    light: "#1D1D1D",
    contrastText: "#FF868E",
  },
  success: {
    main: "#97EAB9",
    light: "rgba(151, 234, 185, 0.3)",
    contrastText: "#FFFFFF",
  },
  warning: {
    main: "#FFD280",
    light: "rgba(255, 210, 128, 0.3)",
    contrastText: "#FFFFFF",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#8C8C8C",
  },
  background: {
    paper: "rgba(255, 255, 255, 0.05)",
    default: "#1D1D1D",
  },
};
