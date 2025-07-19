import React, { useState } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import CreateAgreementDialog from './CreateAgreementDialog';

const Hero = () => {
  const [open, setOpen] = useState(false);

  const handleDialogOpen = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url(/assets/hero-bg.jpg)', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography variant="h2" fontWeight="bold" gutterBottom>
        Create Legally Binding Contracts in Seconds
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        AI-generated agreements, legally compliant and easy to share
      </Typography>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={handleDialogOpen} sx={{ bgcolor: '#df8b26' }}>
          Create Agreement
        </Button>
        <Button variant="outlined" sx={{ color: '#fff', borderColor: '#fff' }}>
          Contact Us
        </Button>
      </Stack>

      <CreateAgreementDialog open={open} onClose={handleDialogClose} />
    </Box>
  );
};

export default Hero;
