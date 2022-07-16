import React from "react";
import { Box } from "@mui/material";
import { MenuButton } from "../../buttons/MenuButton/MenuButton";
import VoteTable from "../../../assets/images/vote-table.png";
import PetBreeds from "../../../assets/images/pet-breeds.png";
import ImagesSearch from "../../../assets/images/images-search.png";
import {
  MenuVoteCardImage,
  MenuCardContainer,
  MenuBreedsCardImage,
  MenuGalleryCardImage,
} from "./MenuCard.styles";

export type MenuOptions = "voting" | "breeds" | "gallery";

export const MENU_OPTIONS = {
  voting: { title: "voting", image: VoteTable, component: MenuVoteCardImage },
  breeds: { title: "breeds", image: PetBreeds, component: MenuBreedsCardImage },
  gallery: {
    title: "gallery",
    image: ImagesSearch,
    component: MenuGalleryCardImage,
  },
};

type MenuCardProps = {
  menuOption: MenuOptions;
};

export const MenuCard = ({ menuOption }: MenuCardProps) => {
  const { title, image, component: CardComponent } = MENU_OPTIONS[menuOption];

  return (
    <MenuCardContainer>
      <CardComponent elevation={0}>
        <img src={image} alt={`${title} menu card`} />
      </CardComponent>
      <MenuButton>{title}</MenuButton>
    </MenuCardContainer>
  );
};
