import React from "react";

import { ReactComponent as BackIcon } from "../../../assets/svg/back-20.svg";
import { StyledNavButton } from "./NavButton.styles";

type NavButtonProps = {
  direction: "prev" | "next";
  handleClick: () => void;
  disabled: boolean;
};

export const NavButton = ({
  handleClick,
  direction,
  disabled,
}: NavButtonProps) => {
  if (direction === "prev")
    return (
      <StyledNavButton
        disabled={disabled}
        onClick={handleClick}
        startIcon={<BackIcon />}
      >
        Prev
      </StyledNavButton>
    );
  return (
    <StyledNavButton
      disabled={disabled}
      sx={{
        "& svg": {
          transform: "rotate(180deg)",
        },
      }}
      onClick={handleClick}
      endIcon={<BackIcon />}
    >
      Next
    </StyledNavButton>
  );
};
