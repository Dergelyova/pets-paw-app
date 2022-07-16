import React from "react";
import { ColoredIconButton } from "./ActionIconButtons.styles";
import { ReactComponent as SearchIcon } from "../../../assets/svg/search-20.svg";

export const SearchIconButton = () => {
  return (
    <ColoredIconButton>
      <SearchIcon />
    </ColoredIconButton>
  );
};
