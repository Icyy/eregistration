import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Description as DescriptionIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationOnIcon,
} from '@mui/icons-material';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Rent Agreement', path: '/rent-agreement' },
    { label: 'Stamp Duty Calculator', path: '/calculator' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Refund Policy', path: '/refund' },
    { label: 'Legal Disclaimer', path: '/disclaimer' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.dark',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <DescriptionIcon sx={{ mr: 1, fontSize: 32 }} />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                E-Registration
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>
              Professional legal document services designed for modern needs. 
              Create rent agreements and calculate stamp duty with ease.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {/* <IconButton sx={{ color: 'white' }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <WhatsAppIcon />
              </IconButton> */}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {quickLinks.map((link) => (
                <Button
                  key={link.path}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: 'white',
                    textAlign: 'left',
                    justifyContent: 'flex-start',
                    p: 0,
                    minWidth: 'auto',
                    opacity: 0.9,
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          </Grid>

          {/* Legal */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {legalLinks.map((link) => (
                <Button
                  key={link.path}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: 'white',
                    textAlign: 'left',
                    justifyContent: 'flex-start',
                    p: 0,
                    minWidth: 'auto',
                    opacity: 0.9,
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ fontSize: 20 }} />
                <Typography variant="body2">+91 98765 43210</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ fontSize: 20 }} />
                <Typography variant="body2">omestates@gmail.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <LocationOnIcon sx={{ fontSize: 20, mt: 0.2 }} />
                <Typography variant="body2">
                  Chembur<br />
                  Mumbai, Maharashtra 
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: 'rgba(255,255,255,0.2)' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © 2024 LegalDocs. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Trusted by thousands of customers across India
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;