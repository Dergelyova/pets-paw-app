import { ThemeProvider } from "@mui/material";
import React, { createContext, useState, useMemo } from "react";
import { LIGHT_THEME, DARK_THEME } from "../../styles";

interface IThemeModeContext {
  isDarkMode: boolean;
  switchMode: () => void;
}

export const ThemeModeContext = createContext<IThemeModeContext>({
  isDarkMode: false,
  switchMode: () => {},
});

interface IThemeModeProvider {
  children: React.ReactNode;
}

export const ThemeModeProvider = ({ children }: IThemeModeProvider) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const switchMode = () => setIsDarkMode(!isDarkMode);

  const contextValue = useMemo(
    () => ({ isDarkMode, switchMode }),
    [isDarkMode]
  );

  return (
    <ThemeModeContext.Provider value={contextValue}>
      <ThemeProvider theme={isDarkMode ? DARK_THEME : LIGHT_THEME}>
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
