import { styled } from "@mui/material";
import { Box, Paper } from "@mui/material";

export const MenuCardContainer = styled(Box)(({ theme }) => ({
  display: "inline-block",
  textAlign: "center",
}));

export const MenuVoteCardImage = styled(Paper)(({ theme }) => ({
  width: "138px",
  height: "198px",
  backgroundColor: "#B4B7FF",
  border: "4px solid rgba(255, 255, 255, 0.6);",
  borderRadius: "20px",
  marginBottom: theme.spacing(1),
  "&:hover": {
    border: "4px solid #FFFFFF",
    cursor: "pointer",
  },
  "&:active": {
    border: `4px solid ${theme.palette.secondary.main}`,
  },
}));

export const MenuBreedsCardImage = styled(MenuVoteCardImage)(({ theme }) => ({
  backgroundColor: "#97EAB9",
}));

export const MenuGalleryCardImage = styled(MenuVoteCardImage)(({ theme }) => ({
  backgroundColor: "#FFD280",
}));
