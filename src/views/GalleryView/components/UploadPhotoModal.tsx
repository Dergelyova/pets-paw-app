import { DialogTitle, Typography, Link, Box } from "@mui/material";
import React, { useState } from "react";
import { CloseIconButton } from "../../../components/buttons/IconActionButtons/CloseIconButton";
import { uploadImage } from "../../../services/utils";
import { ImageDroparea } from "./ImageDroparea";
import { StyledDialog } from "./UploadPhotoModal.styles";
import { ReactComponent as SuccessIcon } from "../../../assets/svg/success-20.svg";
import { ReactComponent as ErrorIcon } from "../../../assets/svg/error-20.svg";
import { LoadingButton } from "@mui/lab";

type UploadModalProps = {
  handleClose: () => void;
  open: boolean;
};

export const UploadPhotoModal = ({ handleClose, open }: UploadModalProps) => {
  const [selectedImage, setSelectedImage] = useState<File | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleImageSelect = (file: File) => {
    setSuccess(false);
    setError(false);
    setSelectedImage(file);
  };

  const handleImageUpload = () => {
    setLoading(true);
    if (selectedImage) {
      uploadImage(selectedImage)
        .then((status) => {
          if (status === 201) {
            setSuccess(true);
            setLoading(false);
            setSelectedImage(undefined);
          }
        })
        .catch((error) => {
          const { message } = error.response.data;

          if (message === "Classifcation failed: correct animal not found.") {
            setError(true);
            setLoading(false);
          }
        });
    }
  };

  return (
    <StyledDialog open={open} id="dialog">
      <CloseIconButton onClose={handleClose} />
      <Box>
        <DialogTitle
          align="center"
          variant="h3"
          sx={{ padding: "0px", marginBottom: "10px" }}
        >
          Upload a .jpg or .png Dog Image
        </DialogTitle>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Any uploads must comply with the{" "}
          <Typography
            component={Link}
            sx={{ color: "primary.main" }}
            href={"https://thedogapi.com/privacy"}
            underline="hover"
            target="_blank"
            rel="noopener"
          >
            upload guidelines
          </Typography>{" "}
          or face deletion.
        </Typography>
      </Box>
      <ImageDroparea
        handleSelect={handleImageSelect}
        selectedImage={selectedImage}
        isError={error}
      />
      {selectedImage && !error && (
        <LoadingButton
          fullWidth={false}
          variant="contained"
          loading={loading}
          loadingPosition="start"
          sx={{
            padding: "12px 30px",
            marginInline: "auto",
            boxShadow: "none",
            borderRadius: "10px",
            gap: 1,
            "&:hover": {
              backgroundColor: "secondary.main",
              color: "secondary.contrastText",
              boxShadow: "none",
            },
            "&:disabled": {
              backgroundColor: "primary.main",
              color: "white",
            },
          }}
          onClick={handleImageUpload}
        >
          {loading ? "Uploading" : "Upload photo"}
        </LoadingButton>
      )}
      {success && (
        <Box
          sx={{
            backgroundColor: "background.paper",
            borderRadius: "10px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {" "}
          <SuccessIcon />{" "}
          <Typography variant="body2" color="text.secondary">
            Thanks for the Upload - Dog found!
          </Typography>
        </Box>
      )}
      {error && (
        <Box
          sx={{
            backgroundColor: "background.paper",
            borderRadius: "10px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {" "}
          <ErrorIcon />{" "}
          <Typography variant="body2" color="text.secondary">
            No Dog found - try a different one
          </Typography>
        </Box>
      )}
    </StyledDialog>
  );
};
