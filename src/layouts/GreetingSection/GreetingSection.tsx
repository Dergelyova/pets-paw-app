import React from "react";
import { GreetingSectionContainer } from "./GreetingSectionContainer.styles";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { Box, Typography } from "@mui/material";
import { MenuCard } from "../../components/cards/MenuCard/MenuCard";

export const GreetingSection = () => {
  return (
    <GreetingSectionContainer>
      <Logo />
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Typography variant="h2" sx={{ paddingBottom: 1 }}>
          Hi intern!
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ paddingBottom: 6 }}
        >
          Welcome to MI 2022 Front-end test
        </Typography>

        <Typography variant="h6" sx={{ paddingBottom: 2 }}>
          Lets start using The Dog API
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <MenuCard menuOption="voting" />
          <MenuCard menuOption="breeds" />
          <MenuCard menuOption="gallery" />
        </Box>
      </Box>
    </GreetingSectionContainer>
  );
};
