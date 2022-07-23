import React from "react";
import { ReactComponent as LikeIcon } from "../../../assets/svg/like-white-30.svg";
import { ReactComponent as FavIconOutlined } from "../../../assets/svg/fav-white-30.svg";
import { ReactComponent as FavIconFilled } from "../../../assets/svg/fav-full-white-30.svg";
import { ReactComponent as DislikeIcon } from "../../../assets/svg/dislike-white-30.svg";
import {
  ActionButtonsPanelContainer,
  LikeIconButton,
  FavIconButton,
  DislikeIconButton,
} from "./ActionButtonsPanel.styles";

type ActionButtonsPanelProps = {
  isFavourite: boolean;
  onFavClick: (vote: 1 | 0) => void;
  onLikeClick: (vote: 1 | 0) => void;
};

export const ActionButtonsPanel = ({
  isFavourite,
  onFavClick,
  onLikeClick,
}: ActionButtonsPanelProps) => {
  return (
    <ActionButtonsPanelContainer>
      <LikeIconButton onClick={() => onLikeClick(1)}>
        <LikeIcon />
      </LikeIconButton>
      <FavIconButton onClick={() => onFavClick(isFavourite ? 0 : 1)}>
        {isFavourite ? <FavIconFilled /> : <FavIconOutlined />}
      </FavIconButton>
      <DislikeIconButton onClick={() => onLikeClick(0)}>
        <DislikeIcon />
      </DislikeIconButton>
    </ActionButtonsPanelContainer>
  );
};
