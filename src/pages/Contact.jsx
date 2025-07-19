import React from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";

const Contact = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Have questions or need support? Fill out the form below and we'll get back to you shortly.
      </Typography>
      <Box component="form" noValidate autoComplete="off" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField label="Your Name" variant="outlined" fullWidth required />
        <TextField label="Email Address" type="email" variant="outlined" fullWidth required />
        <TextField label="Message" multiline rows={4} variant="outlined" fullWidth required />
        <Button variant="contained" sx={{ backgroundColor: "#df8b26", "&:hover": { backgroundColor: "#c17620" } }}>
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
