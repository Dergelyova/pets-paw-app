import { IconButton, styled } from "@mui/material";

type ExtraProps = {
  isActive: boolean;
};

export const GreyIconButton = styled(IconButton, {
  shouldForwardProp: (props) => props !== "isActive",
})<ExtraProps>(({ theme, isActive }) => ({
  width: "40px",
  height: "40px",
  backgroundColor: theme.palette.background.default,
  border: `2px solid`,
  borderColor: isActive ? theme.palette.secondary.main : "transparent",
  borderRadius: "10px",
  boxSizing: "border-box",
  "& svg path": {
    fill: isActive ? theme.palette.primary.main : theme.palette.text.secondary,
  },
  "&:hover": {
    borderColor: theme.palette.secondary.main,
    backgroundColor: theme.palette.background.default,
    "& svg path": {
      fill: theme.palette.primary.main,
    },
  },
}));
