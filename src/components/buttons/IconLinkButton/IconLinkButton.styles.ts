import { styled, IconButton } from "@mui/material";

export const CustomizedIconLinkButton = styled(IconButton)(({ theme }) => ({
  width: "60px",
  height: "60px",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "20px",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
  "&:active": {
    backgroundColor: theme.palette.primary.main,
    "& svg path": {
      fill: "#FFFFFF",
    },
  },
}));
