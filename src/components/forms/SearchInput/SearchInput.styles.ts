import { styled, OutlinedInput } from "@mui/material";

export const SearchInputContainer = styled(OutlinedInput)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "60px",
  padding: "10px",
  borderRadius: "20px",
  outline: "none",
  backgroundColor: theme.palette.common.white,
  border: `2px solid ${theme.palette.common.white}`,
  "& .MuiOutlinedInput-input": {
    paddingBlock: "5px",
    paddingInline: "10px",
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
