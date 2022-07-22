import React from "react";
import { ColoredIconButton } from "./ActionIconButtons.styles";
import { ReactComponent as BackIcon } from "../../../assets/svg/back-20.svg";
import { useNavigate } from "react-router-dom";

export const BackIconButton = () => {
  const navigate = useNavigate();
  return (
    <ColoredIconButton onClick={() => navigate(-1)}>
      <BackIcon />
    </ColoredIconButton>
  );
};
