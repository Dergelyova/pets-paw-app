import React from "react";
import { StyledGalleryCard } from "./GalleryCard.styles";

type GalleryCardProps = {
  imgUrl: string;
};
export const GalleryCard = ({ imgUrl }: GalleryCardProps) => {
  return <StyledGalleryCard src={imgUrl} />;
};
