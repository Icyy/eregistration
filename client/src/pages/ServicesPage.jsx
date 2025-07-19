import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const services = [
  { title: "Biometric Registration", description: "Doorstep biometric verification." },
  { title: "Digital Signature", description: "Seamless e-signature for hassle-free registration." },
  { title: "Stamp Duty Payment", description: "Easily pay your stamp duty online." },
];

const ServicesPage = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Our Services</Typography>
      <Grid container spacing={3}>
        {services.map((service, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <Card>
              <CardContent>
                <Typography variant="h6">{service.title}</Typography>
                <Typography variant="body2">{service.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesPage;
