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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Divider,
  Alert,
} from '@mui/material';
import {
  Calculate as CalculateIcon,
  Receipt as ReceiptIcon,
  Info as InfoIcon,
} from '@mui/icons-material';


const StampDuty = () => {
  const [formData, setFormData] = useState({
    propertyValue: '',
    state: '',
    agreementType: 'rental',
  });
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const states = [
    { value: 'maharashtra', label: 'Maharashtra', stampDutyRate: 0.005, registrationRate: 0.001 },
    { value: 'delhi', label: 'Delhi', stampDutyRate: 0.006, registrationRate: 0.001 },
    { value: 'karnataka', label: 'Karnataka', stampDutyRate: 0.005, registrationRate: 0.001 },
    { value: 'gujarat', label: 'Gujarat', stampDutyRate: 0.005, registrationRate: 0.001 },
    { value: 'rajasthan', label: 'Rajasthan', stampDutyRate: 0.005, registrationRate: 0.001 },
    { value: 'uttar_pradesh', label: 'Uttar Pradesh', stampDutyRate: 0.007, registrationRate: 0.001 },
  ];

  const agreementTypes = [
    { value: 'rental', label: 'Rental Agreement', multiplier: 1 },
    { value: 'lease', label: 'Lease Agreement', multiplier: 1.2 },
    { value: 'commercial', label: 'Commercial Agreement', multiplier: 1.5 },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setResult(null);
  };

  const calculateStampDuty = () => {
    if (!formData.propertyValue || !formData.state) {
      return;
    }

    setIsCalculating(true);

    // Simulate calculation delay
    setTimeout(() => {
      const selectedState = states.find((state) => state.value === formData.state);
      const selectedAgreementType = agreementTypes.find((type) => type.value === formData.agreementType);
      
      const propertyValue = parseFloat(formData.propertyValue);
      const baseStampDuty = propertyValue * selectedState.stampDutyRate * selectedAgreementType.multiplier;
      const registrationFee = propertyValue * selectedState.registrationRate;
      const totalAmount = baseStampDuty + registrationFee;

      setResult({
        propertyValue,
        stampDuty: baseStampDuty,
        registrationFee,
        totalAmount,
        state: selectedState.label,
        agreementType: selectedAgreementType.label,
      });
      setIsCalculating(false);
    }, 1000);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);
  };

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
              <CalculateIcon sx={{ fontSize: 40, color: 'white' }} />
            </Box>
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 600 }}>
              Stamp Duty Calculator
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Calculate accurate stamp duty and registration fees for your rent agreement
            </Typography>
          </Box>

          <Grid container spacing={6}>
            {/* Calculator Form */}
            <Grid item xs={12} lg={6}>
              <Card>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
                    Calculate Your Fees
                  </Typography>

                  <TextField
                    fullWidth
                    label="Annual Rent Amount"
                    name="propertyValue"
                    type="number"
                    value={formData.propertyValue}
                    onChange={handleInputChange}
                    placeholder="Enter annual rent amount"
                    InputProps={{
                      startAdornment: <Typography sx={{ mr: 1 }}>₹</Typography>,
                    }}
                    sx={{ mb: 3 }}
                  />

                  <FormControl fullWidth sx={{ mb: 3 }}>
                    <InputLabel>Select State</InputLabel>
                    <Select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      label="Select State"
                    >
                      {states.map((state) => (
                        <MenuItem key={state.value} value={state.value}>
                          {state.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl fullWidth sx={{ mb: 4 }}>
                    <InputLabel>Agreement Type</InputLabel>
                    <Select
                      name="agreementType"
                      value={formData.agreementType}
                      onChange={handleInputChange}
                      label="Agreement Type"
                    >
                      {agreementTypes.map((type) => (
                        <MenuItem key={type.value} value={type.value}>
                          {type.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    onClick={calculateStampDuty}
                    disabled={!formData.propertyValue || !formData.state || isCalculating}
                    startIcon={<CalculateIcon />}
                    sx={{ py: 2 }}
                  >
                    {isCalculating ? 'Calculating...' : 'Calculate Stamp Duty'}
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Results */}
            <Grid item xs={12} lg={6}>
              {result ? (
                <Card>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <ReceiptIcon sx={{ mr: 2, color: 'primary.main' }} />
                      <Typography variant="h4" sx={{ fontWeight: 600 }}>
                        Calculation Result
                      </Typography>
                    </Box>

                    <Paper sx={{ p: 3, mb: 3, backgroundColor: 'background.default' }}>
                      <Typography variant="body1" sx={{ mb: 1 }}>
                        <strong>Annual Rent:</strong> {formatCurrency(result.propertyValue)}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 1 }}>
                        <strong>State:</strong> {result.state}
                      </Typography>
                      <Typography variant="body1">
                        <strong>Agreement Type:</strong> {result.agreementType}
                      </Typography>
                    </Paper>

                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                        <Typography variant="body1">Stamp Duty:</Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                          {formatCurrency(result.stampDuty)}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                        <Typography variant="body1">Registration Fee:</Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                          {formatCurrency(result.registrationFee)}
                        </Typography>
                      </Box>
                      <Divider sx={{ my: 2 }} />
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                          Total Amount:
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                          {formatCurrency(result.totalAmount)}
                        </Typography>
                      </Box>
                    </Box>

                    <Alert severity="info" sx={{ mb: 3 }}>
                      <Typography variant="body2">
                        This is an estimated calculation. Actual fees may vary based on local regulations.
                      </Typography>
                    </Alert>

                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      sx={{ mb: 2 }}
                      onClick={() => window.print()}
                    >
                      Print Result
                    </Button>

                    <Button
                      variant="contained"
                      color="secondary"
                      fullWidth
                      href="/rent-agreement"
                    >
                      Create Rent Agreement
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <InfoIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                      Enter Details to Calculate
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Fill in the annual rent amount and select your state to get an instant calculation
                      of stamp duty and registration fees.
                    </Typography>
                  </CardContent>
                </Card>
              )}
            </Grid>
          </Grid>

          {/* Information Section */}
          <Card sx={{ mt: 6 }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                Important Information
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                    What is Stamp Duty?
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Stamp duty is a tax paid on legal documents to make them legally valid. 
                    For rent agreements, it's calculated as a percentage of the annual rent.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                    Registration Fee
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Registration fee is charged for registering the document with the government. 
                    It's usually a small percentage of the document value.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                    State Variations
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Stamp duty rates vary by state. Some states have different rates for 
                    different types of agreements and property values.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Box>

    </Box>
  );
};

export default StampDuty;