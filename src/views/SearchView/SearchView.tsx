import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { BackIconButton } from "../../components/buttons/IconActionButtons/BackIconButton";
import { IDogImage } from "../../services/types";
import { fetchBreedSearchWithImageByName } from "../../services/utils";
import { ImagesGrid } from "../../layouts/PageSection/ImagedGrid/ImagesGrid";
import { CircularProgress } from "../../components/CircularProgress/CircularProgress";
import { DefaultLog } from "../../components/DefaultLog/DefaultLog";

const SearchView = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [breeds, setBreeds] = useState<IDogImage[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const handleBreedSelection = (id: number | string) => {
    navigate(`/breeds/${id}`);
  };

  useEffect(() => {
    setLoading(true);
    fetchBreedSearchWithImageByName(searchParams.get("q") as string).then(
      (res) => {
        const breedsImages: IDogImage[] = res.map(({ id, image, name }) => {
          return { id, name, url: image.url };
        });
        setBreeds(breedsImages);
        setLoading(false);
      }
    );
    return () => setBreeds(undefined);
  }, [searchParams]);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Box sx={{ display: "flex", gap: 1 }}>
        <BackIconButton />
        <Breadcrumbs />
      </Box>
      {loading && (
        <Box sx={{ marginTop: "150px" }}>
          <CircularProgress />
        </Box>
      )}
      {breeds && breeds.length > 0 && (
        <>
          <Typography variant="body1" color="text.secondary">
            Search results for:{" "}
            <Typography component="span" color="text.primary" fontWeight="500">
              {searchParams.get("q")}
            </Typography>
          </Typography>
          <ImagesGrid
            actionOpion="breedSelect"
            images={breeds}
            handleImageAction={handleBreedSelection}
          />
        </>
      )}
      {!loading && breeds?.length === 0 && <DefaultLog />}
    </Box>
  );
};

export default SearchView;
