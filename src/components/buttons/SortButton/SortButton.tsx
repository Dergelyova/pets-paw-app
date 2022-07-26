import React from "react";
import { ReactComponent as SortIcon } from "./../../../assets/svg/sort-20.svg";
import { ReactComponent as SortRevertIcon } from "./../../../assets/svg/sort-revert-20.svg";
import { GreyIconButton } from "./SortButton.styles";

type SortButtonProps = {
  sortOrder: "asc" | "desc";
  handleClick: () => void;
  isActive: boolean;
};

export const SortButton = ({
  sortOrder,
  handleClick,
  isActive,
}: SortButtonProps) => {
  return (
    <GreyIconButton isActive={isActive} onClick={handleClick}>
      {sortOrder === "desc" ? <SortIcon /> : <SortRevertIcon />}
    </GreyIconButton>
  );
};
