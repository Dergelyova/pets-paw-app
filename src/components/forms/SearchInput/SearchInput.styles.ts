import { Paper, FormControl, styled, OutlinedInput } from "@mui/material";

export const SearchInputContainer = styled(OutlinedInput)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: 395,
  padding: 10,
  borderRadius: 20,
  margin: 10,
  outline: "none",
  backgroundColor: theme.palette.common.white,
  border: `2px solid ${theme.palette.common.white}`,
  "& .MuiOutlinedInput-input": {
    paddingBlock: 5,
    paddingInline: 10,
  },
  "& fieldset": {
    border: "none",
  },
  "&:hover": {
    border: `2px solid ${theme.palette.secondary.main}`,
  },
  "&:focus": {
    border: `2px solid ${theme.palette.primary.main}`,
  },
  "&:focus-within": {
    border: `2px solid ${theme.palette.primary.main}`,
  },
  "&:active": {
    border: `2px solid ${theme.palette.primary.main}`,
  },
}));