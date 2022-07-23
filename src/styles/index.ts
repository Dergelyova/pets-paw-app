import { createTheme } from "@mui/material";
import type {} from "@mui/lab/themeAugmentation";
import { TYPOGRAPHY as typography } from "./typography";
import {
  LIGHT_PALETTE as lightPalette,
  DARK_PALETTE as darkPalette,
} from "./palette";

export const LIGHT_THEME = createTheme({
  palette: lightPalette,
  typography,
  spacing: 10,
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: "none",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: { maxHeight: "350px" },
      },
    },
  },
});

export const DARK_THEME = createTheme({
  palette: darkPalette,
  typography,
  spacing: 10,
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: "none",
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: "none",
          "& .MuiPopover-paper": {
            backgroundColor: "#1D1D1D",
            "& .MuiMenuItem-root": {
              color: "white",
            },
          },
        },
      },
    },

    MuiList: {
      styleOverrides: {
        root: { maxHeight: "350px" },
      },
    },
  },
});
