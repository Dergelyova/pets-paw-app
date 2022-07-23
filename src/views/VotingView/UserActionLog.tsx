import { Paper, Box, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as LikeIcon } from "../../assets/svg/like-color-30.svg";
import { ReactComponent as FavIconOutlined } from "../../assets/svg/fav-30.svg";
import { ReactComponent as DislikeIcon } from "../../assets/svg/dislike-color-30.svg";

export type UserActionLogType = {
  id: string | number;
  actionType: "like" | "dislike" | "addFav" | "removeFav";
  time: string;
};

type UserActionLogProps = {
  log: UserActionLogType;
};

const logContent = {
  like: { actionText: "was added to Likes", icon: <LikeIcon /> },
  dislike: { actionText: "was added to Dislikes", icon: <DislikeIcon /> },
  addFav: { actionText: "was added to Favourites", icon: <FavIconOutlined /> },
  removeFav: { actionText: "was removed from Favourites", icon: undefined },
};

export const UserActionLog = ({ log }: UserActionLogProps) => {
  const { actionText, icon } = logContent[log.actionType];

  return (
    <Box
      sx={{
        display: "flex",
        padding: "15px",
        justifyContent: "space-between",
        alighItems: "center",
        backgroundColor: "background.default",
        borderRadius: "10px",
      }}
    >
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Paper component={Typography} sx={{ padding: "3px 10px" }}>
          {log.time}
        </Paper>
        <Typography variant="body2" color="text.secondary">
          Image ID:{" "}
          <Typography
            component="span"
            variant="body2"
            color="text.primary"
            fontWeight="500"
          >
            {log.id}
          </Typography>{" "}
          {actionText}
        </Typography>
      </Box>
      {icon && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            "& svg": { width: "20px", height: "20px" },
          }}
        >
          {icon}
        </Box>
      )}
    </Box>
  );
};
