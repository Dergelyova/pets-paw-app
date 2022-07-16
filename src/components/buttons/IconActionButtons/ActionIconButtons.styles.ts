import { IconButton, styled } from "@mui/material";

export const LightIconButton = styled(IconButton)(({ theme }) => ({
  width: "40px",
  height: "40px",
  backgroundColor: theme.palette.common.white,
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    "& svg path": {
      fill: "#FFFFFF",
    },
  },
}));

export const ColoredIconButton = styled(LightIconButton)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));
