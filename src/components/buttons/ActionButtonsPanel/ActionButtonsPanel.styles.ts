import { IconButton, Paper, styled } from "@mui/material";

export const ActionButtonsPanelContainer = styled(Paper)(({ theme }) => ({
  background: theme.palette.common.white,
  border: `4px solid ${theme.palette.background.paper}`,
  borderRadius: "20px",

  display: "inline-flex",
  gap: "4px",
  marginTop: "-44px",
}));

export const LikeIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  borderTopLeftRadius: "15px",
  borderBottomLeftRadius: "15px",
  borderTopRightRadius: "0px",
  borderBottomRightRadius: "0px",
  padding: "25px",
  "&:hover": {
    backgroundColor: theme.palette.success.light,
    "& svg path": {
      fill: theme.palette.success.main,
    },
  },
}));

export const FavIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: "0px",
  padding: "25px",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    "& svg path": {
      fill: theme.palette.primary.main,
    },
  },
}));

export const DislikeIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.warning.main,
  borderTopRightRadius: "15px",
  borderBottomRightRadius: "15px",
  borderTopLeftRadius: "0px",
  borderBottomLeftRadius: "0px",
  padding: "25px",
  "&:hover": {
    backgroundColor: theme.palette.warning.light,
    "& svg path": {
      fill: theme.palette.warning.main,
    },
  },
}));
