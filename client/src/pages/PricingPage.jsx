import React from 'react';
import { Box, Grid, Card, Typography, Button, CardContent } from '@mui/material';

const PricingPage = () => {
  const pricingOptions = [
    { title: 'Basic', price: '₹2000', features: ['Biometric Verification', 'Stamp Duty Calculation'] },
    { title: 'Premium', price: '₹3500', features: ['Digital Signature', 'Home Visit'] },
    { title: 'Ultimate', price: '₹5000', features: ['All Features Included', 'Priority Support'] },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Pricing</Typography>
      <Grid container spacing={3}>
        {pricingOptions.map((option, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <Card>
              <CardContent>
                <Typography variant="h5">{option.title}</Typography>
                <Typography variant="h6">{option.price}</Typography>
                <ul>
                  {option.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Button variant="contained" color="primary">Select</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PricingPage;
