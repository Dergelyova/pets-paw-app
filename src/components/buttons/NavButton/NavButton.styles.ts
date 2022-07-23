import { styled } from "@mui/material";
import { StyledUploadButton } from "../UploadButton/UploadButton.styles";

export const StyledNavButton = styled(StyledUploadButton)(({ theme }) => ({
  "& svg": {
    width: "16px",
    height: "16px",
    padding: "2px 2px",
  },
  "&:disabled": {
    backgroundColor: theme.palette.background.default,
    color: "#8C8C8C",
    "& svg path": {
      fill: "#8C8C8C",
    },
  },
}));
