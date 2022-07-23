import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { BackIconButton } from "../../components/buttons/IconActionButtons/BackIconButton";
import { NavButton } from "../../components/buttons/NavButton/NavButton";
import { SortButton } from "../../components/buttons/SortButton/SortButton";
import { CircularProgress } from "../../components/CircularProgress/CircularProgress";
import { BasicDropdown } from "../../components/forms/BasicDropdown/BasicDropdown";
import { ImagesGrid } from "../../layouts/PageSection/ImagedGrid/ImagesGrid";
import {
  IBreed,
  IDogImage,
  OrderOptions,
  OrderOptionsShort,
} from "../../services/types";
import { fetchBreedsImages, fetchBreedsListInfo } from "../../services/utils";

const limitOptions = [5, 10, 15, 20];

const BreedsView = () => {
  const navigate = useNavigate();
  const [breedsList, setBreedsList] = useState<IBreed[]>([
    {
      id: 0,
      name: "All breeds",
    },
  ]);
  const [selectedBreed] = useState<number>(0);
  const [breedsImages, setBreedsImages] = useState<IDogImage[] | undefined>(
    undefined
  );
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState<OrderOptionsShort>(OrderOptions.ASC);
  const [loading, setLoading] = useState(true);

  const handleLimitChange = (val: string) => {
    setLimit(+val.split(":")[1]);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  const handlePrevClick = () => {
    setPage(page - 1);
  };

  const handleAscSortClick = () => {
    setOrder(OrderOptions.ASC);
  };

  const handleDescSortClick = () => {
    setOrder(OrderOptions.DESC);
  };

  const handleBreedSelection = (id: number | string) => {
    navigate(`/breeds/${id}`);
  };

  useEffect(() => {
    fetchBreedsListInfo().then((res) => {
      const mappedBreeds: IBreed[] = res.map((breed) => ({
        id: breed.id,
        name: breed.name,
      }));

      setBreedsList([
        {
          id: 0,
          name: "All breeds",
        },
        ...mappedBreeds,
      ]);
    });

    return () => setBreedsList([]);
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchBreedsImages({
      limit,
      order,
      page,
    }).then((res) => {
      const breedsImages: IDogImage[] = res.map(({ id, image, name }) => {
        return { id, name, url: image.url };
      });
      setBreedsImages(breedsImages);
      setLoading(false);
    });
  }, [limit, page, order]);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 1 }}>
        <BackIconButton />
        <Breadcrumbs />
        <BasicDropdown
          options={breedsList}
          handleChange={handleBreedSelection}
          selected={selectedBreed}
        />
        <Box sx={{ display: "flex", gap: 1 }}>
          <BasicDropdown
            selected={`Limit:${limit}`}
            options={limitOptions.map((opt) => `Limit:${opt}`)}
            handleChange={handleLimitChange}
          />
          <SortButton handleClick={handleDescSortClick} sortOrder="desc" />
          <SortButton handleClick={handleAscSortClick} sortOrder="asc" />
        </Box>
      </Box>
      {loading && <CircularProgress />}
      {breedsImages && !loading && (
        <>
          <ImagesGrid
            actionOpion="breedSelect"
            images={breedsImages}
            handleImageAction={handleBreedSelection}
          />
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
            <NavButton
              disabled={page <= 0}
              direction="prev"
              handleClick={handlePrevClick}
            />
            <NavButton
              disabled={page + 1 > Math.floor((breedsList.length - 1) / limit)}
              direction="next"
              handleClick={handleNextClick}
            />
          </Box>
        </>
      )}
    </>
  );
};

export default BreedsView;
