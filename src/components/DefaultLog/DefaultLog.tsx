import { Box, Typography } from "@mui/material";
import React from "react";

type DefaultLogProps = {
  customText?: string;
};

export const DefaultLog = ({ customText }: DefaultLogProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "60px",
        paddingInline: "20px",
        alighItems: "center",
        backgroundColor: "background.default",
        borderRadius: "10px",
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ alignSelf: "center" }}
      >
        {`${customText ? customText : "No item found"}`}
      </Typography>
    </Box>
  );
};
