import { Box, InputLabel, Typography } from "@mui/material";
import React, { useEffect } from "react";
import UploadBgImage from "../../../assets/images/upload-bg.png";

type ImageDropareaProps = {
  selectedImage?: File;
  handleSelect: (arg: File) => void;
  isError: boolean;
};

export const ImageDroparea = ({
  selectedImage,
  handleSelect,
  isError,
}: ImageDropareaProps) => {
  const handleCapture = ({ target }: any) => {
    if (target.files[0]) handleSelect(target.files[0]);
  };

  useEffect(() => {
    const handleDragenterEvent = (e: DragEvent) => e.preventDefault();
    const handleDragoverEvent = (e: DragEvent) => e.preventDefault();
    const handleDropEvent = (e: DragEvent) => {
      e.preventDefault();
      let target = e.target as HTMLElement;
      if (target.id.includes("dragzone")) {
        if (e.dataTransfer?.files) {
          handleSelect(e.dataTransfer?.files[0]);
        }
      }
    };

    window.addEventListener("dragenter", handleDragenterEvent, false);
    window.addEventListener("dragover", handleDragoverEvent, false);
    window.addEventListener("drop", handleDropEvent, false);

    return () => {
      window.removeEventListener("dragenter", handleDragenterEvent, false);
      window.removeEventListener("dragover", handleDragoverEvent, false);
      window.removeEventListener("drop", handleDropEvent, false);
    };
  }, []);

  return (
    <>
      <InputLabel htmlFor="upload-image" sx={{ display: "contents" }}>
        <Box
          id="dragzone"
          draggable="true"
          sx={{
            backgroundColor: isError ? "secondary.main" : "background.paper",
            width: "100%",
            height: "320px",
            borderRadius: "20px",
            display: "flex",
            gap: 2,
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundImage: isError
              ? `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%23FF868EFF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`
              : `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%23FBE0DCFF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e"), url(${UploadBgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {!selectedImage && (
            <Typography align="center" color="text.secondary">
              <Typography
                id="dragzone-button"
                component="span"
                sx={{
                  fontWeight: "500",
                  color: "text.primary",
                }}
              >
                Drag here
              </Typography>{" "}
              your file or{" "}
              <Typography
                component="span"
                sx={{
                  fontWeight: "500",
                  color: "text.primary",
                  "&:hover": { cursor: "pointer" },
                }}
              >
                Click here
              </Typography>{" "}
              to upload
            </Typography>
          )}
          {selectedImage && (
            <Box
              id="dragzone-area"
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "20px 40px",
                height: "100%",
                "& img": { borderRadius: "20px" },
              }}
            >
              <img
                src={URL.createObjectURL(selectedImage)}
                alt={selectedImage.name}
              />
            </Box>
          )}
        </Box>
        <input
          type="file"
          id="upload-image"
          accept=".jpg,.png"
          onChange={handleCapture}
          hidden
          multiple
        />
      </InputLabel>
      <Typography align="center" color="text.secondary">
        {selectedImage
          ? `Image File Name: ${selectedImage.name}`
          : "No file selected"}
      </Typography>
    </>
  );
};
