import React from "react";
import { LightIconButton } from "./ActionIconButtons.styles";
import { ReactComponent as FavOutlinedIcon } from "../../../assets/svg/fav-20.svg";

type FavIconButtonOutlinedProps = {
  handleClick: (clickedId: string | number) => void;
  id: string | number;
};

export const FavIconButtonOutlined = ({
  handleClick,
  id,
}: FavIconButtonOutlinedProps) => {
  return (
    <LightIconButton onClick={() => handleClick(id)}>
      <FavOutlinedIcon />
    </LightIconButton>
  );
};
