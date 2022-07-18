import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { PageSectionContainer } from "./PageSectionContainer.styles";

export const PageSectionLayout = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", height: "100%", gap: 1 }}
    >
      <Header />
      <PageSectionContainer>
        <Outlet />
      </PageSectionContainer>
    </Box>
  );
};
