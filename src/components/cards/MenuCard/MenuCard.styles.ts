import { styled } from "@mui/material/styles";
import { Paper, Button } from "@mui/material";

type ExtraProps = {
  component: React.ElementType;
  to: string;
};

export const MenuCardContainer = styled(Paper)<ExtraProps>(({ theme }) => ({
  backgroundColor: "transparent",
  display: "inline-block",
  textAlign: "center",
  textDecoration: "none",
  "&:hover": {
    ".MuiPaper-root": {
      border: "4px solid #FFFFFF",
    },
    ".MuiButton-root": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  "&.active": {
    ".MuiPaper-root": {
      border: `4px solid ${theme.palette.secondary.main}`,
    },
    ".MuiButton-root": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },
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
}));

export const MenuBreedsCardImage = styled(MenuVoteCardImage)(({ theme }) => ({
  backgroundColor: "#97EAB9",
}));

export const MenuGalleryCardImage = styled(MenuVoteCardImage)(({ theme }) => ({
  backgroundColor: "#FFD280",
}));

export const MenuButton = styled(Button)(({ theme }) => ({
  width: "138px",
  paddingBlock: "10px",
  borderRadius: "10px",
  backgroundColor: theme.palette.background.paper,
}));
