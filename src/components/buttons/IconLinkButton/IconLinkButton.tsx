import React from "react";
import { ReactComponent as LikeIcon } from "../../../assets/svg/like-30.svg";
import { ReactComponent as FavIcon } from "../../../assets/svg/fav-30.svg";
import { ReactComponent as DislikeIcon } from "../../../assets/svg/dislike-30.svg";
import { CustomizedIconLinkButton } from "./IconLinkButton.styles";

export enum LinkOptionType {
  LIKES = "LIKES",
  FAVOURITES = "FAVOURITES",
  DISLIKES = "DISLIKES",
}

const linkButtonOptions = {
  [LinkOptionType.LIKES]: <LikeIcon />,
  [LinkOptionType.FAVOURITES]: <FavIcon />,
  [LinkOptionType.DISLIKES]: <DislikeIcon />,
};

type IconLinkButtonProps = {
  linkOption: LinkOptionType;
};

export const IconLinkButton = ({ linkOption }: IconLinkButtonProps) => {
  const CustomIcon = linkButtonOptions[linkOption];
  console.log(CustomIcon);

  return <CustomizedIconLinkButton>{CustomIcon}</CustomizedIconLinkButton>;
};
