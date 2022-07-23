import { ImageList, ImageListItem, Button } from "@mui/material";
import React from "react";
import { LightIconButton } from "../../../components/buttons/IconActionButtons/ActionIconButtons.styles";
import { ReactComponent as FavOutlinedIcon } from "../../../assets/svg/fav-20.svg";
import { ReactComponent as FavFilledIcon } from "../../../assets/svg/fav-color-20.svg";

import { IDogImage } from "../../../services/types";
import {
  ImageListItemBarCenterIconButton,
  ImageListItemBarBottomButton,
} from "./ImagesGrid.styles";

type ImagesListProps = {
  images: IDogImage[];
  handleImageAction?: (
    clickedId: string | number,
    vote?: 1 | 0,
    favId?: number | string
  ) => void;
  actionOpion?: "breedSelect" | "favImage";
};

function srcset(image: string, size: number, rows: number, cols: number) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const ImagesGrid = ({
  images,
  handleImageAction,
  actionOpion,
}: ImagesListProps) => {
  return (
    <ImageList
      variant="quilted"
      cols={3}
      rowHeight={140}
      gap={10}
      sx={{ marginBlock: "0px" }}
    >
      {images.map((image, i) => {
        let cols = 1,
          rows = 1;
        if (i % 10 === 0 || i % 10 === 7) {
          rows = 2;
        }
        if (i % 10 === 3 || i % 10 === 8) {
          cols = 2;
          rows = 2;
        }

        return (
          <ImageListItem
            key={image.id}
            cols={cols}
            rows={rows}
            sx={{
              borderRadius: "20px",
              "& .MuiImageListItemBar-root": {
                display: "none",
              },

              "&:hover .MuiImageListItemBar-root": {
                display: "block",
              },
            }}
          >
            <img
              {...srcset(image.url, 140, rows, cols)}
              alt="dogphoto from list"
              style={{ borderRadius: "20px" }}
            />
            {actionOpion === "favImage" && (
              <ImageListItemBarCenterIconButton
                actionIcon={
                  handleImageAction && (
                    <LightIconButton
                      onClick={() =>
                        handleImageAction(
                          image.id,
                          image.favourite ? 0 : 1,
                          image.favourite?.id
                        )
                      }
                    >
                      {image.favourite ? (
                        <FavFilledIcon />
                      ) : (
                        <FavOutlinedIcon />
                      )}
                    </LightIconButton>
                  )
                }
              />
            )}{" "}
            {actionOpion === "breedSelect" && (
              <ImageListItemBarBottomButton
                actionIcon={
                  handleImageAction && (
                    <Button
                      variant="text"
                      fullWidth
                      sx={{
                        backgroundColor: "secondary.light",
                        "&:hover": { backgroundColor: "secondary.light" },
                      }}
                      onClick={() => handleImageAction(image.id)}
                    >
                      {image.name}
                    </Button>
                  )
                }
              />
            )}
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};
