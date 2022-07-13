import { TypographyOptions } from "@mui/material/styles/createTypography";

export const TYPOGRAPHY: TypographyOptions = {
  fontFamily: ["Jost", "sans-serif"].join(","), // Roboto is used for testing
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: undefined,
  h2: {
    fontWeight: 500,
    fontSize: "44px",
    lineHeight: "58px",
  },
  h3: {
    fontWeight: 500,
    fontSize: "36px",
    lineHeight: "normal",
  },
  h6: {
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "normal",
  },

  body1: {
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "30px",
  },
  body2: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
  },
  button: {
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "2px",
    textTransform: "uppercase",
  },

  overline: {
    fontWeight: 500,
    fontSize: "10px",
    lineHeight: "18px",
    textTransform: "uppercase",
  },
};
