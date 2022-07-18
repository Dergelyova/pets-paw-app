import React from "react";
import VoteTable from "../../../assets/images/vote-table.png";
import PetBreeds from "../../../assets/images/pet-breeds.png";
import ImagesSearch from "../../../assets/images/images-search.png";
import {
  MenuVoteCardImage,
  MenuCardContainer,
  MenuBreedsCardImage,
  MenuGalleryCardImage,
  MenuButton,
} from "./MenuCard.styles";
import { NavLink } from "react-router-dom";

export type MenuOptions = "voting" | "breeds" | "gallery";

export const MENU_OPTIONS = {
  voting: {
    title: "voting",
    image: VoteTable,
    component: MenuVoteCardImage,
    link: "/voting",
  },
  breeds: {
    title: "breeds",
    image: PetBreeds,
    component: MenuBreedsCardImage,
    link: "/breeds",
  },
  gallery: {
    title: "gallery",
    image: ImagesSearch,
    component: MenuGalleryCardImage,
    link: "/gallery",
  },
};

type MenuCardProps = {
  menuOption: MenuOptions;
};

export const MenuCard = ({ menuOption }: MenuCardProps) => {
  const {
    title,
    image,
    component: CardComponent,
    link,
  } = MENU_OPTIONS[menuOption];

  return (
    <MenuCardContainer component={NavLink} to={link}>
      <CardComponent elevation={0}>
        <img src={image} alt={`${title} menu card`} />
      </CardComponent>
      <MenuButton>{title}</MenuButton>
    </MenuCardContainer>
  );
};
