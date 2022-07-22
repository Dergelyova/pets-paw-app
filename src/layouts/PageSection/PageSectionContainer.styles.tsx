import { Paper, styled } from "@mui/material";

export const PageSectionContainer = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  borderRadius: 20,
  padding: 20,
  gap: 10,
});

export const StartPageSectionContainer = styled(PageSectionContainer)(
  ({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    "& img": {
      position: "absolute",
      marginLeft: "auto",
      marginBlock: "auto",
      height: "auto",
      minWidth: "775px",
    },
  })
);
