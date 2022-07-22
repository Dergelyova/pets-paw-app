import { Chip, styled } from "@mui/material";

type ExtraProps = {
  isLast: boolean;
};

export const StyledBreadcrumb = styled(Chip)<ExtraProps>(
  ({ theme, isLast }) => ({
    ...theme.typography.button,
    fontSize: "20px",
    lineHeight: "30px",
    backgroundColor: isLast
      ? theme.palette.primary.main
      : theme.palette.secondary.main,
    color: isLast
      ? theme.palette.primary.contrastText
      : theme.palette.secondary.contrastText,
    borderRadius: "10px",
    padding: "5px 30px",
    height: "auto",
    "& .MuiChip-label": {
      padding: "0px",
    },
  })
);
