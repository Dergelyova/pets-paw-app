import React, { useState } from "react";
import { FormControl, InputAdornment } from "@mui/material";

import { SearchIconButton } from "../../buttons/IconActionButtons/SearchIconButton";
import { SearchInputContainer } from "./SearchInput.styles";
import { useNavigate } from "react-router-dom";

export const SearchInput = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate({ pathname: "/search", search: `?q=${value}` }, { replace: true });
  };

  return (
    <FormControl fullWidth>
      <SearchInputContainer
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for breeds by name"
        endAdornment={
          <InputAdornment position="end">
            <SearchIconButton handleClick={handleSearchClick} />
          </InputAdornment>
        }
        fullWidth={true}
      />
    </FormControl>
  );
};
