import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  FormControlLabel,
  Checkbox,
  Paper,
  Divider,
  Alert,
} from "@mui/material";
import {
  Calculate as CalculateIcon,
  Receipt as ReceiptIcon,
  Info as InfoIcon,
} from "@mui/icons-material";

const StampDuty = () => {
  const [formData, setFormData] = useState({
    propertyAddress: "",
    deposit: "",
    rent: "",
    duration: "",
    isVaried: false,
    variedRents: [],
  });

  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setResult(null);
  };

  const handleCheckboxChange = (e) => {
    if (!formData.duration) return; // prevent enabling if duration empty
    setFormData({
      ...formData,
      isVaried: e.target.checked,
      variedRents: [],
    });
    setResult(null);
  };

  const handleYearlyRentChange = (index, value) => {
    const updatedRents = [...formData.variedRents];
    updatedRents[index] = value;
    setFormData({ ...formData, variedRents: updatedRents });
  };

  const calculateStampDuty = () => {
    const { deposit, rent, duration, isVaried, variedRents } = formData;

    if (!deposit || !duration || (!isVaried && !rent)) {
      alert("Please fill all required fields.");
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      const depositValue = parseFloat(deposit);
      const months = parseInt(duration);
      const years = Math.ceil(months / 12);
      let A = 0;

      if (isVaried) {
        if (variedRents.length !== years || variedRents.some((r) => !r)) {
          alert("Please enter rent for all years.");
          setIsCalculating(false);
          return;
        }
        A = variedRents.reduce((sum, val) => sum + parseFloat(val || 0), 0);
      } else {
        const annualRent = parseFloat(rent);
        A = annualRent * years;
      }

      const B = depositValue;
      const C = depositValue * 0.1 * years;
      const totalAmount = A + B + C;
      const stampDuty = totalAmount * 0.0025;

      setResult({
        A,
        B,
        C,
        stampDuty,
        totalAmount,
        years,
        yearlyBreakdown: isVaried ? variedRents : Array(years).fill(rent),
      });

      setIsCalculating(false);
    }, 800);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  };

  const yearsCount = formData.duration ? Math.ceil(formData.duration / 12) : 0;

  // Disable Calculate button if:
  // - deposit is empty OR
  // - duration is empty OR
  // - (checkbox not selected and rent is empty)
  const isCalculateDisabled =
    !formData.deposit ||
    !formData.duration ||
    (!formData.isVaried && !formData.rent) ||
    isCalculating;

  return (
    <Box sx={{ minHeight: "100vh", py: 6 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
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
            <CalculateIcon sx={{ fontSize: 40, color: "white" }} />
          </Box>
          <Typography variant="h2" sx={{ mb: 2, fontWeight: 600 }}>
            Maharashtra Stamp Duty Calculator
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto" }}
          >
            Calculate accurate stamp duty and registration fees for your rent
            agreement
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Calculator Form */}
          <Grid item xs={12} lg={6}>
            <Card>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
                  Enter Details
                </Typography>

                <TextField
                  fullWidth
                  label="Property Address"
                  name="propertyAddress"
                  value={formData.propertyAddress}
                  onChange={handleInputChange}
                  sx={{ mb: 3 }}
                />

                <TextField
                  fullWidth
                  label="Deposit Amount"
                  name="deposit"
                  type="number"
                  value={formData.deposit}
                  onChange={handleInputChange}
                  placeholder="Enter deposit amount"
                  InputProps={{
                    startAdornment: <Typography sx={{ mr: 1 }}>₹</Typography>,
                  }}
                  sx={{ mb: 3 }}
                />

                <TextField
                  fullWidth
                  label="Duration (in months)"
                  name="duration"
                  type="number"
                  value={formData.duration}
                  onChange={handleInputChange}
                  placeholder="e.g., 24"
                  sx={{ mb: 3 }}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.isVaried}
                      onChange={handleCheckboxChange}
                      disabled={!formData.duration} // Disable if no duration
                    />
                  }
                  label="Varied Rent (different each year)"
                  sx={{ mb: 3 }}
                />

                {!formData.isVaried && (
                  <TextField
                    fullWidth
                    label="Annual Rent Amount"
                    name="rent"
                    type="number"
                    value={formData.rent}
                    onChange={handleInputChange}
                    placeholder="Enter annual rent"
                    InputProps={{
                      startAdornment: <Typography sx={{ mr: 1 }}>₹</Typography>,
                    }}
                    sx={{ mb: 3 }}
                  />
                )}

                {formData.isVaried && yearsCount > 0 && (
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" sx={{ mb: 2 }}>
                      Enter rent for each year ({yearsCount} years):
                    </Typography>
                    {Array.from({ length: yearsCount }).map((_, index) => (
                      <TextField
                        key={index}
                        fullWidth
                        label={`Year ${index + 1} Rent`}
                        type="number"
                        value={formData.variedRents[index] || ""}
                        onChange={(e) =>
                          handleYearlyRentChange(index, e.target.value)
                        }
                        sx={{ mb: 2 }}
                      />
                    ))}
                  </Box>
                )}

                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  onClick={calculateStampDuty}
                  disabled={isCalculateDisabled}
                  startIcon={<CalculateIcon />}
                  sx={{ py: 2 }}
                >
                  {isCalculating ? "Calculating..." : "Calculate Stamp Duty"}
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Results */}
          <Grid item xs={12} lg={6}>
            {result ? (
              <Card>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <ReceiptIcon sx={{ mr: 2, color: "primary.main" }} />
                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                      Calculation Result
                    </Typography>
                  </Box>

                  <Paper
                    sx={{ p: 3, mb: 3, backgroundColor: "background.default" }}
                  >
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      <strong>Total Rent (A):</strong>{" "}
                      {formatCurrency(result.A)}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      <strong>Deposit (B):</strong> {formatCurrency(result.B)}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      <strong>10% Deposit × Years (C):</strong>{" "}
                      {formatCurrency(result.C)}
                    </Typography>
                  </Paper>

                  <Card sx={{ mb: 3, backgroundColor: "#f9f9f9" }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        Yearly Rent Breakdown
                      </Typography>
                      {result.yearlyBreakdown.map((value, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mb: 1,
                          }}
                        >
                          <Typography>Year {index + 1}:</Typography>
                          <Typography sx={{ fontWeight: 600 }}>
                            {formatCurrency(value)}
                          </Typography>
                        </Box>
                      ))}
                    </CardContent>
                  </Card>

                  <Box sx={{ mb: 3 }}>
                    <Divider sx={{ my: 2 }} />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        Stamp Duty (0.25%):
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, color: "primary.main" }}
                      >
                        {formatCurrency(result.stampDuty)}
                      </Typography>
                    </Box>
                  </Box>

                  <Alert severity="info" sx={{ mb: 3 }}>
                    <Typography variant="body2">
                      This is an estimated calculation. Actual fees may vary
                      based on local regulations.
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
                    href="/create-agreement"
                    sx={{
                      mb: 2,
                      "&:hover": {
                        backgroundColor: "white",
                        color: "primary.main",
                      },
                    }}
                  >
                    Create Rent Agreement
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent sx={{ p: 4, textAlign: "center" }}>
                  <InfoIcon
                    sx={{ fontSize: 60, color: "text.secondary", mb: 2 }}
                  />
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    Enter Details to Calculate
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Fill in all fields to get an instant calculation of stamp
                    duty fees.
                  </Typography>
                </CardContent>
              </Card>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StampDuty;
