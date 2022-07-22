import { FormControl, Box, SelectChangeEvent, Typography } from "@mui/material";

import { StyledSelect, StyledMenuItem } from "./BasicDropdown.styles";
import { ReactComponent as ArrowDown } from "../../../assets/svg/dropdown-12.svg";
import { IBreed } from "../../../services/types";

type BasicDropdownProps<T> = {
  label?: string;
  options: string[] | IBreed[];
  selected?: string | number;
  handleChange: (val: T) => void;
};

export const BasicDropdown = <T,>({
  label,
  selected,
  options,
  handleChange,
}: BasicDropdownProps<T>) => {
  const hanleDropdownChange = (event: SelectChangeEvent<T | unknown>) => {
    handleChange(event.target.value as T);
  };

  const dropdownOptions = options.map((option) => {
    if (typeof option === "string") {
      return (
        <StyledMenuItem key={option} value={option}>
          {option.toLowerCase()}
        </StyledMenuItem>
      );
    } else {
      return (
        <StyledMenuItem key={option.id} value={option.id}>
          {option.name.toLowerCase()}
        </StyledMenuItem>
      );
    }
  });

  return (
    <Box sx={{ width: "100%" }}>
      <FormControl fullWidth>
        {label && (
          <Typography
            variant="overline"
            sx={{ paddingLeft: "10px", color: "text.secondary" }}
          >
            {label}
          </Typography>
        )}
        <StyledSelect
          value={selected}
          onChange={hanleDropdownChange}
          IconComponent={ArrowDown}
          label={label || ""}
          labeled={label ? 1 : 0}
        >
          {dropdownOptions}
        </StyledSelect>
      </FormControl>
    </Box>
  );
};
