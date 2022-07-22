import { ImageListItemBar, styled } from "@mui/material";

export const StyledImageListItemBar = styled(ImageListItemBar)(({ theme }) => ({
  borderRadius: "20px",
  height: "100%",
  backgroundColor: "transparent",
  padding: "10px",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.primary.light,
  },
}));

export const ImageListItemBarCenterIconButton = styled(StyledImageListItemBar)({
  "& .MuiImageListItemBar-actionIcon": {
    position: "absolute",
    left: "calc(50% - 20px)",
    top: "calc(50% - 20px)",
  },
});

export const ImageListItemBarBottomButton = styled(StyledImageListItemBar)(
  ({ theme }) => ({
    padding: "10px",
    "& .MuiImageListItemBar-actionIcon": {
      display: "flex",
      justifyContent: "center",
      position: "absolute",
      left: "0",
      bottom: "0",
      width: "90%",
      margin: "10px",
      paddingBlock: "5px",
      borderRadius: "10px",
      backgroundColor: theme.palette.background.paper,
      "& .MuiButton-text": {
        ...theme.typography.body2,
        textTransform: "capitalize",
        letterSpacing: "initial",
      },
    },
  })
);
