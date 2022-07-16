import { IconButton, Paper, styled } from "@mui/material";
import { FavIconButtonFilled } from "../IconActionButtons/FavIconButtonFilled";

export const ActionButtonsPanelContainer = styled(Paper)(({ theme }) => ({
  background: theme.palette.common.white,
  border: `4px solid ${theme.palette.background.paper}`,
  borderRadius: "10px",
  display: "inline-flex",

  gap: "4px",
}));

export const LikeIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  borderTopLeftRadius: "10px",
  borderBottomLeftRadius: "10px",
  borderTopRightRadius: "0px",
  borderBottomRightRadius: "0px",
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
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    "& svg path": {
      fill: theme.palette.primary.main,
    },
  },
}));

export const DislikeIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.warning.main,
  borderTopRightRadius: "10px",
  borderBottomRightRadius: "10px",
  borderTopLeftRadius: "0px",
  borderBottomLeftRadius: "0px",
  "&:hover": {
    backgroundColor: theme.palette.warning.light,
    "& svg path": {
      fill: theme.palette.warning.main,
    },
  },
}));
