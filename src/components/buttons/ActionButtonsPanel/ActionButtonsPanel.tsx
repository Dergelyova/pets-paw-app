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

export const ActionButtonsPanel = () => {
  return (
    <ActionButtonsPanelContainer>
      <LikeIconButton>
        <LikeIcon />
      </LikeIconButton>
      <FavIconButton>
        <FavIconOutlined />
      </FavIconButton>
      <DislikeIconButton>
        <DislikeIcon />
      </DislikeIconButton>
    </ActionButtonsPanelContainer>
  );
};
