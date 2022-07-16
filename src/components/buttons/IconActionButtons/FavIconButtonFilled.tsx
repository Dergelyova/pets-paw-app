import React from "react";
import { LightIconButton } from "./ActionIconButtons.styles";
import { ReactComponent as FavFilledIcon } from "../../../assets/svg/fav-full-white-20.svg";

export const FavIconButtonFilled = () => {
  return (
    <LightIconButton>
      <FavFilledIcon />
    </LightIconButton>
  );
};
