import { styled, Select, MenuItem } from "@mui/material";

type StylesSelectProps = {
  labeled?: boolean;
};

export const StyledSelect = styled(Select)<StylesSelectProps>(
  ({ theme, labeled }) => ({
    ...theme.typography.body2,
    color: labeled ? theme.palette.text.primary : theme.palette.text.secondary,
    borderRadius: "10px",
    border: "2px solid transparent",
    backgroundColor: `${
      labeled
        ? theme.palette.background.paper
        : theme.palette.background.default
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
  })
);

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  "&$selected": {
    backgroundColor: theme.palette.primary.main,
  },
}));
