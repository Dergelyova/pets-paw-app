import React from "react";
import { LightIconButton } from "./ActionIconButtons.styles";
import { ReactComponent as ReloadIcon } from "../../../assets/svg/update-20.svg";

type ReloadButtonProps = {
  handleClick?: () => void;
};

export const ReloadButton = ({ handleClick }: ReloadButtonProps) => {
  return (
    <LightIconButton onClick={handleClick}>
      <ReloadIcon />
    </LightIconButton>
  );
};
