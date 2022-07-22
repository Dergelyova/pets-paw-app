import React from "react";
import { StyledUploadButton } from "./UploadButton.styles";
import { ReactComponent as UploadIcon } from "../../../assets/svg/upload-16.svg";

type UploadButtonProps = {
  handleClick: () => void;
};

export const UploadButton = ({ handleClick }: UploadButtonProps) => {
  return (
    <StyledUploadButton startIcon={<UploadIcon />} onClick={handleClick}>
      Upload
    </StyledUploadButton>
  );
};
