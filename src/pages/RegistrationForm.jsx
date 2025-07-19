import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Stepper, Step, StepLabel } from '@mui/material';

const steps = ['Personal Details', 'Property Details', 'Payment'];

const RegistrationForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Rent Agreement Registration</Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ my: 2 }}>
        {activeStep === 0 && (
          <>
            <TextField fullWidth label="Full Name" margin="normal" />
            <TextField fullWidth label="Email" margin="normal" />
            <TextField fullWidth label="Phone Number" margin="normal" />
          </>
        )}
        {activeStep === 1 && (
          <>
            <TextField fullWidth label="Property Address" margin="normal" />
            <TextField fullWidth label="Rent Amount" margin="normal" />
          </>
        )}
        {activeStep === 2 && (
          <Typography variant="h6">Complete the Payment to Finish Registration</Typography>
        )}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
        <Button variant="contained" onClick={handleNext}>
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </Box>
  );
};

export default RegistrationForm;
