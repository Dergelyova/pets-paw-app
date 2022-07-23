import { Dialog, styled } from "@mui/material";

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    height: "100%",
    maxWidth: "680px",
    width: "100%",
    borderRadius: 20,
    padding: 20,
    margin: "30px 30px 30px auto",
    gap: 20,
    backgroundColor: theme.palette.background.default,
  },
}));
