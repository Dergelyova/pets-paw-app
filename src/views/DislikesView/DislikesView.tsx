import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BackIconButton } from "../../components/buttons/IconActionButtons/BackIconButton";
import { ImagesGrid } from "../../layouts/PageSection/ImagedGrid/ImagesGrid";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { IDogImage } from "../../services/types";
import { fetchDislikedImages } from "../../services/utils";
import { CircularProgress } from "../../components/CircularProgress/CircularProgress";
import { DefaultLog } from "../../components/DefaultLog/DefaultLog";

const DislikesView = () => {
  const [dislikedImages, setDislikedImages] = useState<IDogImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchDislikedImages().then((res) => {
      setDislikedImages(res);
      setLoading(false);
    });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        gap: 2,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 1 }}>
        <BackIconButton />
        <Breadcrumbs />
      </Box>
      {loading && (
        <Box sx={{ marginTop: "150px" }}>
          <CircularProgress />
        </Box>
      )}
      {dislikedImages.length > 0 && <ImagesGrid images={dislikedImages} />}
      {dislikedImages.length === 0 && !loading && <DefaultLog />}
    </Box>
  );
};

export default DislikesView;
