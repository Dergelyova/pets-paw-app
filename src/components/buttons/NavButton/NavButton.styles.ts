import { styled } from "@mui/material";
import { StyledUploadButton } from "../UploadButton/UploadButton.styles";

export const StyledNavButton = styled(StyledUploadButton)({
  "& svg": {
    width: "16px",
    height: "16px",
    padding: "2px 2px",
  },
  "&:disabled": {
    backgroundColor: "#F8F8F7",
    color: "#8C8C8C",
    "& svg path": {
      fill: "#8C8C8C",
    },
  },
});
