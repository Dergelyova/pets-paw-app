import { Box } from "@mui/material";

import React, { useEffect, useState } from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { ActionButtonsPanel } from "../../components/buttons/ActionButtonsPanel/ActionButtonsPanel";
import { BackIconButton } from "../../components/buttons/IconActionButtons/BackIconButton";
import { CircularProgress } from "../../components/CircularProgress/CircularProgress";
import { IDogImage } from "../../services/types";
import {
  fetchRandomImage,
  addImageToFavourite,
  removeImageFromFavourite,
  createVote,
} from "../../services/utils";
import { UserActionLog, UserActionLogType } from "./UserActionLog";

const VotingView = () => {
  const [image, setImage] = useState<IDogImage | undefined>(undefined);
  const [actionLogs, setActionLogs] = useState<UserActionLogType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchRandomImage().then((res) => {
      setImage(res);
      setLoading(false);
    });
    return () => setImage(undefined);
  }, []);

  const handleFavClick = (favAction: 1 | 0) => {
    if (!image) return;
    if (!!favAction) {
      addImageToFavourite(image?.id).then(({ id }) => {
        setImage({ ...image, favourite: { id } });
        let d = new Date();
        setActionLogs([
          {
            id: image.id,
            time: `${d.toTimeString().slice(0, 5)}`,
            actionType: "addFav",
          },
          ...actionLogs,
        ]);
      });
    }
    if (image.favourite) {
      removeImageFromFavourite(image?.favourite.id).then((res) => {
        let cleanedImage = { ...image };
        delete cleanedImage.favourite;
        console.log(cleanedImage);
        setImage(cleanedImage);
        let d = new Date();
        setActionLogs([
          {
            id: image.id,
            time: `${d.toTimeString().slice(0, 5)}`,
            actionType: "removeFav",
          },
          ...actionLogs,
        ]);
      });
    }
  };

  const handleLikeClick = (voteAction: 1 | 0) => {
    if (!image) return;
    createVote(image?.id, voteAction)
      .then(() => {
        let d = new Date();
        setActionLogs([
          {
            id: image.id,
            time: `${d.toTimeString().slice(0, 5)}`,
            actionType: !!voteAction ? "like" : "dislike",
          },
          ...actionLogs,
        ]);
      })
      .then(() =>
        fetchRandomImage().then((res) => {
          setImage(res);
        })
      );
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
        <Box
          sx={{ display: "flex", justifyContent: "center", height: "360px" }}
        >
          <CircularProgress />
        </Box>
      )}
      {image && !loading && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            sx={{
              borderRadius: "20px",
              objectFit: "cover",
              maxWidth: "100%",
              maxHeight: "360px",
              margin: "auto",
              width: "100%",
            }}
            src={image.url}
            alt={`dog ${image.id}`}
          />
          <ActionButtonsPanel
            isFavourite={!!image.favourite}
            onFavClick={handleFavClick}
            onLikeClick={handleLikeClick}
          />
        </Box>
      )}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {actionLogs.map((log) => (
          <UserActionLog key={log.id} log={log} />
        ))}
      </Box>
    </Box>
  );
};

export default VotingView;
