import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import DescriptionIcon from "@mui/icons-material/Description";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "Rent Agreement", path: "/create-agreement" },
    { label: "Fees", path: "/stamp-duty-fees" },
    { label: "Contact Us", path: "/contact" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const mobileDrawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navigationItems.map((item) => (
          <ListItem
            key={item.path}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              color:
                location.pathname === item.path
                  ? "primary.main"
                  : "text.primary",
              textDecoration: "none",
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        <ListItem>
          <Button
            component={Link}
            to="/create-agreement"
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleDrawerToggle}
          >
            Rent Agreement
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "white",
          color: "text.primary",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <DescriptionIcon sx={{ color: "primary.main", mr: 1, fontSize: 32 }} />
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  fontWeight: 700,
                  color: "secondary.main",
                  textDecoration: "none",
                  fontSize: "1.5rem",
                }}
              >
                E-Registration
              </Typography>
            </Box>

            {/* Desktop Menu */}
            {isMobile ? (
              <IconButton color="primary" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                <Box sx={{ display: "flex", gap: 3 }}>
                  {navigationItems.map((item) => (
                    <Button
                      key={item.path}
                      component={Link}
                      to={item.path}
                      sx={{
                        color:
                          location.pathname === item.path
                            ? "secondary.main"
                            : "text.primary",
                        fontWeight: location.pathname === item.path ? 600 : 500,
                        textDecoration: "none",
                        "&:hover": { color: "secondary.main" },
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>
                <Button
                  component={Link}
                  to="/create-agreement"
                  variant="contained"
                  color="secondary"
                  sx={{
                    ml: 2,
                    "&:hover": {
                      backgroundColor: "white",
                      color: "primary.main",
                    },
                  }}
                >
                  Create Agreement
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {mobileDrawer}
      </Drawer>
    </>
  );
};

export default Navbar;
