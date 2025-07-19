import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom>
          Welcome to E-Registration
        </Typography>
        <Typography variant="h6" paragraph>
          Seamlessly create and manage your rent agreements online. Simple, secure, and hassle-free.
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/create-agreement"
          sx={{ mt: 3, backgroundColor: "#df8b26", "&:hover": { backgroundColor: "#c17620" } }}
        >
          Create Agreement
        </Button>
      </Container>
    </Box>
  );
};

export default HomePage;
