import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "black",
        color: "white",
        mt: "auto",
        py: 2,
        textAlign: "center",
        padding: "1rem",
        position: "sticky",
        bottom: "0",
      }}
    >
      <Typography variant="body1">
        © 2024 E-Registration. All rights reserved.
      </Typography>
      <Link href="/privacy-policy" color="inherit">
        Privacy Policy
      </Link>{" "}
      |{" "}
      <Link href="/contact-us" color="inherit">
        Contact Us
      </Link>
    </Box>
  );
};

export default Footer;
