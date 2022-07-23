import React from "react";
import { CssBaseline } from "@mui/material";

import { BrowserRouter } from "react-router-dom";
import { RenderRoutes } from "./navigation/routes";
import { ROUTER_CONFIG } from "./navigation/router-config";
import { ThemeModeProvider } from "./components/context/ThemeModeProvider";

function App() {
  return (
    <ThemeModeProvider>
      <CssBaseline />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <RenderRoutes routes={ROUTER_CONFIG} />
      </BrowserRouter>
    </ThemeModeProvider>
  );
}

export default App;
