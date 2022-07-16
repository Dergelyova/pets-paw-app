import React from "react";
import { LightIconButton } from "./ActionIconButtons.styles";
import { ReactComponent as CloseIcon } from "../../../assets/svg/close-20.svg";

export const CloseIconButton = () => {
  return (
    <LightIconButton>
      <CloseIcon />
    </LightIconButton>
  );
};
