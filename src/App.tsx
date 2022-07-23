import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
// import { LIGHT_THEME, DARK_THEME } from "./styles";
import { BrowserRouter } from "react-router-dom";
import { RenderRoutes } from "./navigation/routes";
import { ROUTER_CONFIG } from "./navigation/router-config";
import { ThemeModeProvider } from "./components/context/ThemeModeProvider";

function App() {
  return (
    <ThemeModeProvider>
      <CssBaseline />
      <BrowserRouter>
        <RenderRoutes routes={ROUTER_CONFIG} />
      </BrowserRouter>
    </ThemeModeProvider>
  );
}

export default App;

// basename={process.env.PUBLIC_URL}
