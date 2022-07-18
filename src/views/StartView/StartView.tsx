import React from "react";
import { StartPageSectionContainer } from "../../layouts/PageSection/PageSectionContainer.styles";
import GirlAndPetImage from "../../assets/images/girl-and-pet.png";

const StartView = () => {
  return (
    <>
      <StartPageSectionContainer />
      <img
        src={GirlAndPetImage}
        alt="alt"
        style={{
          position: "fixed",
          minWidth: "775px",
          top: "0%",
          right: "0%",
          objectFit: "cover",
          height: "100vh",
        }}
      />
    </>
  );
};

export default StartView;
