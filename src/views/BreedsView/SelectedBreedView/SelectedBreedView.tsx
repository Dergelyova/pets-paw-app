import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumbs } from "../../../components/Breadcrumbs/Breadcrumbs";
import { BackIconButton } from "../../../components/buttons/IconActionButtons/BackIconButton";
import {
  IDogImage,
  IBreedWithImage,
  IBreedWithImageReference,
} from "../../../services/types";
import { fetchBreedInfoWithImage } from "../../../services/utils";

export const SelectedBreedView = () => {
  let { breedId } = useParams();
  const [breedInfo, setBreedInfo] = useState<
    IBreedWithImageReference | undefined
  >(undefined);
  const [imageInfo, setImageInfo] = useState<IDogImage | undefined>(undefined);

  useEffect(() => {
    if (breedId) {
      fetchBreedInfoWithImage(+breedId).then(({ breedInfo, imageInfo }) => {
        setBreedInfo(breedInfo);
        setImageInfo(imageInfo);
      });
    }
  }, []);
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 1 }}>
        <BackIconButton />
        <Breadcrumbs />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          maxHeight: "360px",
          maxWidth: "100%",

          "& img": {
            borderRadius: "20px",
            objectFit: "scale-down",
            maxWidth: "100%",
            maxHeight: "360px",
          },
        }}
      >
        <img src={imageInfo?.url} alt={`dog ${imageInfo?.id}`} />
      </Box>
    </div>
  );
};
