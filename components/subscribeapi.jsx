import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  Typography,
  Stack,
  Container,
  Paper,
  Stepper,
  Step,
} from "@mui/material";

const subscribeapi = () => {
  const [activeStep, setActiveStep] = useState(0); // State for active step
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4"]; // Define steps

  const handleNext = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1)); // Go to next step
  };

  const handleBack = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0)); // Go to previous step
  };

  return (
    <Container
      component={Paper}
      maxWidth={false}
      sx={{
        ml: 4,
        mt: 4,
        p: 4,
        borderRadius: "8px",
        width: "80vw",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Add API
      </Typography>

      <Stack spacing={6}>
        {/* Step Indicators */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          px={2}
          mb={4}
        >
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((_, index) => (
              <Step key={index}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  padding="20px"
                  width="40px"
                  height="40px"
                  borderRadius="50%"
                  bgcolor={index <= activeStep ? "orange" : "lightgray"}
                  color="white"
                  fontWeight="bold"
                  fontSize="large"
                >
                  {index + 1}
                </Box>
              </Step>
            ))}
          </Stepper>
        </Box>

        {/* Form Fields */}
        <Box width="100%">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <FormLabel>API Name</FormLabel>
                <TextField fullWidth placeholder="Enter Details" />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <FormLabel>Category</FormLabel>
                <TextField fullWidth placeholder="Enter Details" />
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={4} mt={2}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <FormLabel>Description</FormLabel>
                <TextField fullWidth placeholder="Enter Details" />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <FormLabel>Version</FormLabel>
                <TextField fullWidth placeholder="Enter Details" />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <FormLabel>Keywords</FormLabel>
                <TextField fullWidth placeholder="Enter Details" />
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        {/* Save Button - Bottom Right */}
        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Button variant="contained" color="primary">
            Save
          </Button>
        </Box>

        {/* Navigation Buttons */}
      </Stack>
    </Container>
  );
};

export default subscribeapi;
