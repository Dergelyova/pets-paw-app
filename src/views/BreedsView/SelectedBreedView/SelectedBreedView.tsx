import { Box, MobileStepper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import { bindKeyboard } from "react-swipeable-views-utils";
import { Breadcrumbs } from "../../../components/Breadcrumbs/Breadcrumbs";
import { BackIconButton } from "../../../components/buttons/IconActionButtons/BackIconButton";
import { IDogImage, IBreed } from "../../../services/types";
import { fetchBreedInfoWithImages } from "../../../services/utils";

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

export const SelectedBreedView = () => {
  let { breedId } = useParams();
  const [activeStep, setActiveStep] = useState(0);
  const [breedInfo, setBreedInfo] = useState<IBreed | undefined>(undefined);
  const [breedImages, setBreedImages] = useState<IDogImage[] | undefined>(
    undefined
  );

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  useEffect(() => {
    if (breedId) {
      fetchBreedInfoWithImages(+breedId).then(({ breedInfo, breedImages }) => {
        setBreedInfo(breedInfo);
        setBreedImages(breedImages);
      });
    }
  }, [breedId]);

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
      {breedImages && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <BindKeyboardSwipeableViews
            axis={"x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {breedImages.map((step, index) => (
              <div key={step.id} style={{ display: "flex" }}>
                {Math.abs(activeStep - index) <= 2 ? (
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
                    src={step.url}
                    alt={`dog ${step.id}`}
                  />
                ) : null}
              </div>
            ))}
          </BindKeyboardSwipeableViews>
          <MobileStepper
            variant="dots"
            sx={{
              zIndex: "1000",
              backgroundColor: "background.paper",
              margin: "-15px",
              padding: "10px",
              borderRadius: "20px",
              "& .MuiMobileStepper-dot": {
                width: "10px",
                height: "10px",
                backgroundColor: "secondary.main",
              },
              "& .MuiMobileStepper-dotActive": {
                backgroundColor: "primary.main",
              },
            }}
            steps={breedImages.length}
            position="static"
            activeStep={activeStep}
            nextButton={null}
            backButton={null}
          />
        </Box>
      )}
      {breedInfo && (
        <Box
          component="fieldset"
          sx={{
            border: `2px solid`,
            borderColor: "secondary.main",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            paddingInline: "40px",
          }}
        >
          <legend style={{ marginInline: "auto", padding: "5px 40px" }}>
            <Typography variant="h3" align="center">
              {breedInfo.name}
            </Typography>
          </legend>
          {breedInfo.bred_for && (
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ marginTop: "-20px" }}
              align="center"
            >
              {`${breedInfo.bred_for} dog`}
            </Typography>
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexFlow: "wrap",
              gap: 2,
            }}
          >
            <Box sx={{ flex: "1" }}>
              <Typography variant="body2" color="text.secondary">
                <Typography
                  component="span"
                  variant="body2"
                  color="text.primary"
                  fontWeight="500"
                >
                  Temperament:{" "}
                </Typography>
                {breedInfo.temperament}
              </Typography>
            </Box>
            <Box
              sx={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography variant="body2" color="text.secondary">
                <Typography
                  component="span"
                  variant="body2"
                  color="text.primary"
                  fontWeight="500"
                >
                  Height:{" "}
                </Typography>
                {`${breedInfo.height?.metric} cm`}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Typography
                  component="span"
                  variant="body2"
                  color="text.primary"
                  fontWeight="500"
                >
                  Weight:{" "}
                </Typography>
                {`${breedInfo.weight?.metric} kgs`}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Typography
                  component="span"
                  variant="body2"
                  color="text.primary"
                  fontWeight="500"
                >
                  Life-span:{" "}
                </Typography>
                {breedInfo.life_span}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
