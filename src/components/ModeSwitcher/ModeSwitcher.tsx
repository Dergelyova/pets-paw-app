import { Switch } from "@mui/material";
import React, { useContext, useState } from "react";
import { ThemeModeContext } from "../context/ThemeModeProvider";

export const ModeSwitcher = () => {
  const { isDarkMode, switchMode } = useContext(ThemeModeContext);

  return <Switch checked={!isDarkMode} onChange={switchMode} color="primary" />;
};
