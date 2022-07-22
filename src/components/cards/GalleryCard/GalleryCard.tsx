import React from "react";
import { StyledGalleryCard } from "./GalleryCard.styles";

type GalleryCardProps = {
  src: string;
  alt: string;
  srcSet: string;
  isLiked: boolean;
};

export const GalleryCard = ({
  src,
  alt,
  isLiked,
  srcSet,
}: GalleryCardProps) => {
  return <StyledGalleryCard src={src} srcSet={srcSet} alt={alt} />;
};
