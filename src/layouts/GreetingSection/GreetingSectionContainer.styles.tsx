import { Box } from "@mui/material";
import React from "react";

type GreetingSectionContainerProps = {
  children?: React.ReactNode;
};

export const GreetingSectionContainer = ({
  children,
}: GreetingSectionContainerProps) => {
  return (
    <Box
      sx={{
        width: "446px",
        height: "554px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "start",
      }}
    >
      {children}
    </Box>
  );
};
