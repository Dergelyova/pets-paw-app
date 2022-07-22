import React, { useEffect, useState } from "react";

import { IDogImage, OrderOptions } from "../../services/types";
import { ImagesGrid } from "../../layouts/PageSection/ImagedGrid/ImagesGrid";
import { ImageType, IBreed } from "../../services/types";
import { BackIconButton } from "../../components/buttons/IconActionButtons/BackIconButton";

import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Box, Paper } from "@mui/material";
import { BasicDropdown } from "../../components/forms/BasicDropdown/BasicDropdown";
import { ReloadButton } from "../../components/buttons/IconActionButtons/ReloadButton";
import { fetchGalleryImages, fetchBreedsListInfo } from "../../services/utils";
import { UploadButton } from "../../components/buttons/UploadButton/UploadButton";
import { UploadPhotoModal } from "./components/UploadPhotoModal";

function getKeyName(value: string) {
  return Object.entries(ImageType).find(([key, val]) => val === value)?.[0];
}

const limitOptions = [5, 10, 15, 20];

const GalleryView = () => {
  const [images, setImages] = useState<IDogImage[] | undefined>(undefined);
  const [limit, setLimit] = useState(5);
  const [order, setOrder] = useState<OrderOptions>(OrderOptions.RANDOM);
  const [type, setType] = useState<ImageType>(ImageType.STATIC);
  const [page, setPage] = useState(0);
  const [breeds, setBreeds] = useState<IBreed[]>([
    {
      id: 0,
      name: "All",
    },
  ]);
  const [selectedBreed, setSelectedBreed] = useState<number>(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOrderChange = (val: OrderOptions) => {
    setPage(0);
    setOrder(val);
  };

  const handleTypeChange = (val: keyof typeof ImageType) => {
    setPage(0);
    setType(ImageType[val]);
  };

  const handleLimitChange = (val: string) => {
    setLimit(+val.split(" ")[0]);
  };

  const handleBreedChange = (val: number) => {
    setPage(0);
    setSelectedBreed(val);
  };

  const handleUploadModalOpen = () => {
    console.log("open modal");
    setOpenModal(true);
  };
  const handleUploadModalClose = () => {
    console.log("close modal");
    setOpenModal(false);
  };

  useEffect(() => {
    fetchBreedsListInfo().then((res) => {
      const mappedBreeds: IBreed[] = res.map((breed) => ({
        id: breed.id,
        name: breed.name,
      }));

      setBreeds([
        {
          id: 0,
          name: "All",
        },
        ...mappedBreeds,
      ]);
    });
  }, []);

  useEffect(() => {
    fetchGalleryImages({
      limit,
      order,
      mime_types: type,
      page,
      breed_id: selectedBreed !== 0 ? selectedBreed : undefined,
    }).then((res) => setImages(res));
  }, [limit, order, type, page, selectedBreed]);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          <BackIconButton />
          <Breadcrumbs />
        </Box>
        <UploadButton handleClick={handleUploadModalOpen} />
      </Box>
      <Paper
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: 1,
          padding: "10px 20px 20px 20px",
          backgroundColor: "background.default",
          borderRadius: 2,
        }}
      >
        <BasicDropdown
          label={"order"}
          options={Object.values(OrderOptions)}
          selected={order}
          handleChange={handleOrderChange}
        />
        <BasicDropdown
          label={"type"}
          options={Object.keys(ImageType)}
          selected={getKeyName(type)}
          handleChange={handleTypeChange}
        />
        <BasicDropdown
          label={"breed"}
          options={breeds}
          handleChange={handleBreedChange}
          selected={selectedBreed}
        />
        <Box sx={{ display: "flex", alignItems: "end", gap: 1 }}>
          <BasicDropdown
            label={"limit"}
            options={limitOptions.map((opt) => `${opt} items per page`)}
            selected={`${limit} items per page`}
            handleChange={handleLimitChange}
          />
          <ReloadButton handleClick={() => setPage(page + 1)} />
        </Box>
      </Paper>
      {images && (
        <ImagesGrid
          actionOpion="favImage"
          images={images}
          handleImageAction={(id) => alert(`I want to add photo to fav ${id}`)}
        />
      )}
      <UploadPhotoModal handleClose={handleUploadModalClose} open={openModal} />
    </>
  );
};

export default GalleryView;
