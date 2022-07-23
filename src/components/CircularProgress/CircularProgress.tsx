import { Box } from "@mui/material";
import React from "react";
import { StyledCircularProgress } from "./CircularProgress.styles";

export const CircularProgress = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <StyledCircularProgress />
    </Box>
  );
};
