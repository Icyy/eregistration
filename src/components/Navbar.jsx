import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ width: "100%", margin: 0 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: "none", color: "white" }}>
          E-Registration
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/create-agreement">Create Agreement</Button>
          <Button color="inherit" component={Link} to="/stamp-duty-fees">Fees</Button>
          <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
