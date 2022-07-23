import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { MAIN_THEME } from "./styles";
import { BrowserRouter } from "react-router-dom";
import { RenderRoutes } from "./navigation/routes";
import { ROUTER_CONFIG } from "./navigation/router-config";

function App() {
  return (
    <ThemeProvider theme={MAIN_THEME}>
      <CssBaseline />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <RenderRoutes routes={ROUTER_CONFIG} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
