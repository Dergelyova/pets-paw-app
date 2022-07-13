import { createTheme } from "@mui/material";
import { TYPOGRAPHY as typography } from "./typography";
import { PALETTE as palette } from "./palette";

export const MAIN_THEME = createTheme({
  typography,
  palette,
  spacing: 10,
});
