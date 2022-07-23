import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BackIconButton } from "../../components/buttons/IconActionButtons/BackIconButton";
import { ImagesGrid } from "../../layouts/PageSection/ImagedGrid/ImagesGrid";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { IDogImage } from "../../services/types";
import {
  fetchFavourites,
  removeImageFromFavourite,
} from "../../services/utils";
import { UserActionLog, UserActionLogType } from "../VotingView/UserActionLog";
import { CircularProgress } from "../../components/CircularProgress/CircularProgress";

const FavouritesView = () => {
  const [favImages, setFavImages] = useState<IDogImage[]>([]);
  const [actionLogs, setActionLogs] = useState<UserActionLogType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchFavourites().then((res) => {
      let mappedImages: IDogImage[] = res.map(({ id, image }) => ({
        ...image,
        favourite: { id },
      }));
      setFavImages(mappedImages);
      setLoading(false);
    });
  }, []);

  const handleFavClick = (
    imageId: string | number,
    favAction?: 1 | 0,
    favId?: number | string
  ) => {
    if (favAction === undefined) return;
    if (favId) {
      removeImageFromFavourite(favId).then((res) => {
        let updatedImages = favImages?.filter((image) => image.id !== imageId);
        setFavImages(updatedImages);
        let d = new Date();
        setActionLogs([
          {
            id: imageId,
            time: `${d.toTimeString().slice(0, 5)}`,
            actionType: "removeFav",
          },
          ...actionLogs,
        ]);
      });
    }
  };

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
      {favImages.length > 0 && (
        <ImagesGrid
          actionOpion="favImage"
          images={favImages}
          handleImageAction={handleFavClick}
        />
      )}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {actionLogs.map((log) => (
          <UserActionLog key={log.id} log={log} />
        ))}
      </Box>
    </Box>
  );
};

export default FavouritesView;
