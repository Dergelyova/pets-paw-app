import { Switch, Box } from "@mui/material";
import React, { useContext, useState } from "react";
import { ReactComponent as OpenEyeIcon } from "../../assets/svg/open-eye.svg";
import { ReactComponent as CloseEyeIcon } from "../../assets/svg/close-eye.svg";
import { ThemeModeContext } from "../context/ThemeModeProvider";

export const ModeSwitcher = () => {
  const { isDarkMode, switchMode } = useContext(ThemeModeContext);

  return (
    <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
      {isDarkMode ? <CloseEyeIcon /> : <OpenEyeIcon />}
      <Switch checked={!isDarkMode} onChange={switchMode} color="primary" />
    </Box>
  );
};
