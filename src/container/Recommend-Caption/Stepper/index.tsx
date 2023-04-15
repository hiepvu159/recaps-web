import React, { useState } from "react";
import classes from "./stepper.module.scss";
import { useRouter } from "next/router";
import { Box, Step, StepLabel, Stepper } from "@mui/material";

export default function LineStepper() {
  const { query } = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={3} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

const steps = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad",
  "Create an ad",
];
