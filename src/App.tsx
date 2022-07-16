import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { MAIN_THEME } from "./styles";

function App() {
  return (
    <ThemeProvider theme={MAIN_THEME}>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
