import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationOnIcon,
  Schedule as ScheduleIcon,
  // MessageCircle as MessageCircleIcon,
  Send as SendIcon,
  WhatsApp as WhatsAppIcon,
} from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.mobile) {
      setSnackbar({
        open: true,
        message: 'Please fill in your name and mobile number.',
        severity: 'error',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSnackbar({
        open: true,
        message: "We'll get back to you within 24 hours.",
        severity: 'success',
      });

      setFormData({ name: '', mobile: '', email: '', message: '' });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Please try again or contact us directly.',
        severity: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 98765 43211'],
    },
    {
      icon: EmailIcon,
      title: 'Email',
      details: ['info@legaldocs.com', 'support@legaldocs.com'],
    },
    {
      icon: LocationOnIcon,
      title: 'Address',
      details: ['123 Business District', 'Mumbai, Maharashtra 400001', 'India'],
    },
    {
      icon: ScheduleIcon,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 7:00 PM',
        'Saturday: 10:00 AM - 5:00 PM',
        'Sunday: Closed',
      ],
    },
  ];

  const whyChooseUs = [
    'Expert legal professionals',
    'Quick response time',
    'Transparent pricing',
    '100% satisfaction guarantee',
    'Secure document handling',
  ];

  return (
    <Box sx={{ minHeight: '100vh' }}>


      {/* Hero Section */}
      <Box
        sx={{
          py: 10,
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #1E88E5, #42A5F5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 3,
              }}
            >
              {/* <MessageCircleIcon sx={{ fontSize: 40, color: 'white' }} /> */}
            </Box>
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 600 }}>
              Contact Us
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Have questions? We're here to help. Reach out to our expert team.
            </Typography>
          </Box>

          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={12} lg={8}>
              <Card>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
                    Send us a Message
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    Fill out the form and we'll get back to you within 24 hours
                  </Typography>

                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          label="Mobile Number"
                          name="mobile"
                          type="tel"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          required
                        />
                      </Grid>
                    </Grid>

                    <TextField
                      fullWidth
                      label="Email Address (Optional)"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      sx={{ mt: 3, mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help you..."
                      sx={{ mb: 4 }}
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      disabled={isSubmitting}
                      endIcon={<SendIcon />}
                      sx={{ py: 2 }}
                    >
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Contact Information */}
            <Grid item xs={12} lg={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Card>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                      Get in Touch
                    </Typography>
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <Box key={index} sx={{ display: 'flex', mb: 3, alignItems: 'flex-start' }}>
                          <Icon sx={{ mr: 2, mt: 0.5, color: 'primary.main' }} />
                          <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                              {info.title}
                            </Typography>
                            {info.details.map((detail, idx) => (
                              <Typography key={idx} variant="body2" color="text.secondary">
                                {detail}
                              </Typography>
                            ))}
                          </Box>
                        </Box>
                      );
                    })}
                  </CardContent>
                </Card>

                <Paper
                  sx={{
                    p: 3,
                    background: 'linear-gradient(135deg, #4CAF50, #66BB6A)',
                    color: 'white',
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    💬 WhatsApp Support
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                    Get instant support on WhatsApp for quick queries and assistance.
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      '&:hover': { backgroundColor: 'rgba(255,255,255,0.3)' },
                    }}
                    startIcon={<WhatsAppIcon />}
                    fullWidth
                  >
                    Chat on WhatsApp
                  </Button>
                </Paper>

                <Card>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      Why Choose Us?
                    </Typography>
                    <Box>
                      {whyChooseUs.map((item, index) => (
                        <Typography key={index} variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                          ✓ {item}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>

          {/* Map Section */}
          <Card sx={{ mt: 6 }}>
            <CardContent sx={{ p: 0 }}>
              <Typography variant="h5" sx={{ p: 4, pb: 0, fontWeight: 600, textAlign: 'center' }}>
                Our Location
              </Typography>
              <Box
                sx={{
                  height: 400,
                  backgroundColor: 'background.default',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  p: 4,
                }}
              >
                <LocationOnIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
                <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
                  Interactive map integration would be placed here
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1, textAlign: 'center' }}>
                  123 Business District, Mumbai, Maharashtra 400001
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>



      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;