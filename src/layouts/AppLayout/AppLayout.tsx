import { Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { GreetingSection } from "../GreetingSection/GreetingSection";

export const AppLayout = () => {
  return (
    <Grid container columnSpacing={2} sx={{ padding: 3, height: "100vh" }}>
      <Grid container item justifyContent="center" columnSpacing={2} xs={6}>
        <Grid item xs={8}>
          <GreetingSection />
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Outlet />
      </Grid>
    </Grid>
  );
};
