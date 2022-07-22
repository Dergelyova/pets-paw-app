import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Button,
} from "@mui/material";
import React from "react";
import { FavIconButtonOutlined } from "../../../components/buttons/IconActionButtons/FavIconButtonOutlined";
import { IDogImage } from "../../../services/types";
import {
  ImageListItemBarCenterIconButton,
  ImageListItemBarBottomButton,
} from "./ImagesGrid.styles";

type ImagesListProps = {
  images: IDogImage[];
  handleImageAction: (clickedId: string | number) => void;
  actionOpion: "breedSelect" | "favImage";
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
    <ImageList variant="quilted" cols={3} rowHeight={140} gap={10}>
      {images.map(({ id, url, name }, i) => {
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
            key={id}
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
              {...srcset(url, 140, rows, cols)}
              alt="dogphoto from list"
              style={{ borderRadius: "20px" }}
            />
            {actionOpion === "favImage" ? (
              <ImageListItemBarCenterIconButton
                actionIcon={
                  <FavIconButtonOutlined
                    handleClick={handleImageAction}
                    id={id}
                  />
                }
              />
            ) : (
              <ImageListItemBarBottomButton
                actionIcon={
                  <Button
                    variant="text"
                    fullWidth
                    onClick={() => handleImageAction(id)}
                  >
                    {name}
                  </Button>
                }
              />
            )}
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};
