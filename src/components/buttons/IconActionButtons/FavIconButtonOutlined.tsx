import React from "react";
import { LightIconButton } from "./ActionIconButtons.styles";
import { ReactComponent as FavOutlinedIcon } from "../../../assets/svg/fav-20.svg";

export const FavIconButtonOutlined = () => {
  return (
    <LightIconButton>
      <FavOutlinedIcon />
    </LightIconButton>
  );
};
