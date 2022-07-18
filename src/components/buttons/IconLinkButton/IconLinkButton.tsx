import React from "react";
import { ReactComponent as LikeIcon } from "../../../assets/svg/like-30.svg";
import { ReactComponent as FavIcon } from "../../../assets/svg/fav-30.svg";
import { ReactComponent as DislikeIcon } from "../../../assets/svg/dislike-30.svg";
import { CustomizedIconLinkButton } from "./IconLinkButton.styles";
import { NavLink } from "react-router-dom";

export enum LinkOptionType {
  LIKES = "likes",
  FAVOURITES = "favourites",
  DISLIKES = "dislikes",
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

  return (
    <CustomizedIconLinkButton component={NavLink} to={linkOption}>
      {CustomIcon}
    </CustomizedIconLinkButton>
  );
};
