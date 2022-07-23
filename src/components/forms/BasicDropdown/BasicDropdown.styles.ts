import { styled, Select, MenuItem } from "@mui/material";

type StylesSelectProps = {
  labeled?: 1 | 0;
};

export const StyledSelect = styled(Select, {
  shouldForwardProp: (props) => props !== "labeled",
})<StylesSelectProps>(({ theme, labeled }) => ({
  ...theme.typography.body2,
  textTransform: "capitalize",
  minWidth: "100px",
  color: labeled ? theme.palette.text.primary : theme.palette.text.secondary,
  borderRadius: "10px",
  border: "2px solid transparent",
  backgroundColor: `${
    labeled ? theme.palette.background.paper : theme.palette.background.default
  }`,
  boxSizing: "border-box",
  height: "40px",

  "& .MuiSelect-select": { padding: "8px 10px" },
  "& fieldset": {
    border: "none",
  },
  "& .MuiSelect-icon": {
    right: "10px",
    top: "auto",
  },
  "& .MuiPaper-root": {
    color: "transparent",
  },
  "&:hover": {
    border: `2px solid ${theme.palette.secondary.main}`,
  },
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  textTransform: "capitalize",
  "&$selected": {
    backgroundColor: theme.palette.primary.main,
  },
}));
