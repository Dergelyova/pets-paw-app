import { Button, styled } from "@mui/material";

export const StyledUploadButton = styled(Button)(({ theme }) => ({
  borderRadius: "10px",
  padding: "12px 30px",
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  "& .MuiButton-startIcon": {
    marginLeft: "0px",
  },
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "& svg path": {
      fill: "#FFFFFF",
    },
  },
}));
