import React from "react";
import { LightIconButton } from "./ActionIconButtons.styles";
import { ReactComponent as CloseIcon } from "../../../assets/svg/close-20.svg";

type CloseIconButtonProps = {
  onClose: () => void;
};

export const CloseIconButton = ({ onClose }: CloseIconButtonProps) => {
  return (
    <LightIconButton onClick={onClose} sx={{ alignSelf: "end" }}>
      <CloseIcon />
    </LightIconButton>
  );
};
