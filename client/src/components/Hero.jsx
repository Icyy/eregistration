import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import {
  Calculate as CalculateIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
// import CreateAgreementDialog from "./CreateAgreementDialog";

const Hero = () => {
  const [open, setOpen] = useState(false);

  const handleDialogOpen = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);

  const trustBadges = [
    {
      title: "100% Secure",
      description: "Bank-level encryption",
    },
    {
      title: "Government Approved",
      description: "Legally valid documents",
    },
    {
      title: "Instant Processing",
      description: "Ready in minutes",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 10, lg: 16 },
        backgroundImage: `linear-gradient(rgba(30, 136, 229, 0.8), rgba(30, 136, 229, 0.9)), url()`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 800, mx: "auto", textAlign: "center" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 700,
              mb: 3,
              lineHeight: 1.2,
            }}
          >
            Create Your Rent Agreement Online <br></br>
            <Box
              component="span"
              color="secondary.main"
              sx={{ fontSize: { xs: "2.5rem", md: "2rem" } }}
            >
              Fast, Secure & Hassle-Free
            </Box>
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              mb: 6,
              mt: 12,
              opacity: 0.95,
            }}
          >
            Trusted Service with Legal Validity. Calculate Stamp Duty Instantly.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              justifyContent: "center",
              mb: 8,
            }}
          >
            <Button
              component={Link}
              to="/create-agreement"
              variant="contained"
              color="secondary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 4,
                py: 2,
                fontSize: "1.1rem",
                "&:hover": {
                  backgroundColor: "white",
                  color: "primary.main",
                },
              }}
            >
              Create Rent Agreement
            </Button>

            <Button
              component={Link}
              to="/stamp-duty-fees"
              variant="outlined"
              size="large"
              endIcon={<CalculateIcon />}
              sx={{
                px: 4,
                py: 2,
                fontSize: "1.1rem",
                color: "white",
                borderColor: "white",
                "&:hover": {
                  backgroundColor: "white",
                  color: "primary.main",
                },
              }}
            >
              Calculate Stamp Duty
            </Button>
          </Box>

          {/* Trust Badges */}

          {/* <Grid container spacing={3} sx={{ maxWidth: 600, mx: "auto" }}>
            {trustBadges.map((badge, index) => {
              const Icon = "";
              return (
                <Grid item xs={12} md={4} key={index}>
                  <Paper
                    sx={{
                      p: 3,
                      textAlign: "center",
                      backgroundColor: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    <Icon sx={{ fontSize: 40, mb: 1, color: "#FFE082" }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {badge.title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      {badge.description}
                    </Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
