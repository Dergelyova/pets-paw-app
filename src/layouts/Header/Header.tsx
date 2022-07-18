import { Box } from "@mui/material";
import React from "react";
import {
  IconLinkButton,
  LinkOptionType,
} from "../../components/buttons/IconLinkButton/IconLinkButton";
import { SearchInput } from "../../components/forms/SearchInput/SearchInput";

export const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        gap: 1,
      }}
    >
      <SearchInput />
      <IconLinkButton linkOption={LinkOptionType.LIKES} />
      <IconLinkButton linkOption={LinkOptionType.FAVOURITES} />
      <IconLinkButton linkOption={LinkOptionType.DISLIKES} />
    </Box>
  );
};
