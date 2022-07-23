import React from "react";
import { ColoredIconButton } from "./ActionIconButtons.styles";
import { ReactComponent as SearchIcon } from "../../../assets/svg/search-20.svg";

type SearchIconButtonProps = {
  handleClick: () => void;
};

export const SearchIconButton = ({ handleClick }: SearchIconButtonProps) => {
  return (
    <ColoredIconButton onClick={handleClick}>
      <SearchIcon />
    </ColoredIconButton>
  );
};
