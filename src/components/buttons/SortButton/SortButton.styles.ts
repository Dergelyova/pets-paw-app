import { IconButton, styled } from "@mui/material";

export const GreyIconButton = styled(IconButton)(({ theme }) => ({
  width: "40px",
  height: "40px",
  backgroundColor: theme.palette.background.default,
  border: `2px solid transparent`,
  borderRadius: "10px",
  boxSizing: "border-box",
  "&:hover": {
    borderColor: theme.palette.secondary.main,
    backgroundColor: theme.palette.background.default,
    "& svg path": {
      fill: theme.palette.primary.main,
    },
  },
}));
