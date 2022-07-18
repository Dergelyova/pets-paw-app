import React, { useState } from "react";
import {
  Paper,
  InputBase,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Input,
} from "@mui/material";

import { SearchIconButton } from "../../buttons/IconActionButtons/SearchIconButton";
import { SearchInputContainer } from "./SearchInput.styles";

export const SearchInput = () => {
  const [value, setValue] = useState("");

  //   const handleChange: (
  //     event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  //   ) => void = () => {};
  return (
    // <SearchInputContainer>
    //   <InputBase
    //     onFocus={(e) => (e.target.placeholder = "")}
    //     value={value}
    //     onChange={(e) => setValue(e.target.value)}
    //     sx={{ ml: "20px", flex: 1 }}
    //     placeholder="Search for breeds by name"
    //     inputProps={{ "aria-label": "search google maps" }}
    //   />
    //   <SearchIconButton />
    // </SearchInputContainer>

    <FormControl fullWidth>
      <SearchInputContainer
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for breeds by name"
        endAdornment={
          <InputAdornment position="end">
            <SearchIconButton />
          </InputAdornment>
        }
        fullWidth={true}
      />
    </FormControl>
  );
};
