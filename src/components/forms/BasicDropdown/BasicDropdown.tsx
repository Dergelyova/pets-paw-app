import {
  FormControl,
  MenuItem,
  Box,
  SelectChangeEvent,
  Typography,
  InputLabel,
} from "@mui/material";
import React, { useState } from "react";
import { StyledSelect, StyledMenuItem } from "./BasicDropdown.styles";
import { ReactComponent as ArrowDown } from "../../../assets/svg/dropdown-12.svg";
import { text } from "stream/consumers";

type BasicDropdownProps = {
  label?: string;
};

export const BasicDropdown = ({ label }: BasicDropdownProps) => {
  const [selectedBreed, setSelectedBreed] = useState("ten");

  const hanleChange = (event: SelectChangeEvent<string | unknown>) => {
    setSelectedBreed(event.target.value as string);
  };

  return (
    <Box sx={{ maxWidth: 200 }}>
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
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedBreed}
          onChange={hanleChange}
          IconComponent={ArrowDown}
          label={label || ""}
          labeled={label ? true : false}
        >
          <StyledMenuItem value={"ten"}>Ten</StyledMenuItem>
          <StyledMenuItem value={"twenty"}>Twenty</StyledMenuItem>
          <StyledMenuItem value={"thirty"}>Thirty</StyledMenuItem>
        </StyledSelect>
      </FormControl>
    </Box>
  );
};
