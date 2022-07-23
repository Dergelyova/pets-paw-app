import { CircularProgress, styled } from "@mui/material";

export const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  top: "50%",
  left: "50%",
  position: "relative",
  color: theme.palette.secondary.main,
}));
