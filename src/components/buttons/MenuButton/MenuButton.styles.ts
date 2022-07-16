import { Button, styled } from "@mui/material";

export const BaseButton = styled(Button)(({ theme }) => ({
  width: "138px",
  paddingBlock: "10px",
  backgroundColor: theme.palette.background.paper,
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
  "&:active": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));
