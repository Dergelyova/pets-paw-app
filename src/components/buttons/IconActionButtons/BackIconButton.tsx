import React from "react";
import { ColoredIconButton } from "./ActionIconButtons.styles";
import { ReactComponent as BackIcon } from "../../../assets/svg/back-20.svg";

export const BackIconButton = () => {
  return (
    <ColoredIconButton>
      <BackIcon />
    </ColoredIconButton>
  );
};
