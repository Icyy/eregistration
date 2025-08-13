import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Description as DescriptionIcon,
  Calculate as CalculateIcon,
  Security as SecurityIcon,
  Schedule as ScheduleIcon,
  EmojiEvents as EmojiEventsIcon,
  ArrowForward as ArrowForwardIcon,
  Check as CheckIcon,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      icon: DescriptionIcon,
      title: "Digital Rent Agreements",
      description:
        "Create legally valid rent agreements online with government-approved templates.",
    },
    {
      icon: CalculateIcon,
      title: "Stamp Duty Calculator",
      description:
        "Instantly calculate accurate stamp duty and registration fees for your state.",
    },
    {
      icon: SecurityIcon,
      title: "100% Secure & Legal",
      description:
        "All documents are legally compliant and securely processed with encryption.",
    },
  ];

  const benefits = [
    "Instant document generation",
    "Government-approved templates",
    "Legal validity guaranteed",
    "24/7 customer support",
    "Mobile-friendly platform",
    "Secure document storage",
  ];

  return (
    <Box sx={{ py: 10, backgroundColor: "background.default" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" sx={{ mb: 2, color: "text.primary" }}>
            Why Choose Our Platform?
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}
          >
            Professional legal document services designed for modern needs
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 10 }}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    textAlign: "center",
                    height: "100%",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #1E88E5, #42A5F5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 3,
                      }}
                    >
                      <Icon sx={{ fontSize: 40, color: "white" }} />
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Benefits Grid */}
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ mb: 4, fontWeight: 600 }}>
              Everything You Need for Legal Documentation
            </Typography>
            <List>
              {benefits.map((benefit, index) => (
                <ListItem key={index} sx={{ px: 0 }}>
                  <ListItemIcon>
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        backgroundColor: "secondary.main",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CheckIcon sx={{ fontSize: 20, color: "white" }} />
                    </Box>
                  </ListItemIcon>
                  <ListItemText
                    primary={benefit}
                    primaryTypographyProps={{ fontSize: "1.1rem" }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ p: 4 }}>
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
                Ready to Get Started?
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Join thousands of satisfied customers who trust us for their
                legal documentation needs.
              </Typography>
              <Button
                component={Link}
                to="/create-agreement"
                variant="contained"
                color="secondary"
                size="large"
                fullWidth
                // endIcon={<ArrowForwardIcon />}
                sx={{
                  py: 2,
                  "&:hover": {
                    backgroundColor: "white",
                    color: "primary.main",
                  },
                }}
              >
                Start Creating Documents
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
