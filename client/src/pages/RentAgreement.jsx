import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  InputLabel,
  Snackbar,
  Alert
} from "@mui/material";
import axios from "axios";

const RentAgreement = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
  });
  const [aadhar, setAadhar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setAadhar(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !aadhar) {
      setSnackbar({ open: true, message: "Please fill all fields and upload Aadhar.", severity: "error" });
      return;
    }

    const form = new FormData();
    form.append("name", formData.name);
    form.append("mobile", formData.mobile);
    form.append("aadhar", aadhar);

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/send-agreement", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSnackbar({ open: true, message: "Request submitted successfully!", severity: "success" });
      setFormData({ name: "", mobile: "" });
      setAadhar(null);
    } catch (err) {
      console.error(err);
      setSnackbar({ open: true, message: "Error sending data. Try again.", severity: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Create Rent Agreement</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField name="name" label="Full Name" required value={formData.name} onChange={handleChange} />
        <TextField name="mobile" label="Mobile Number" required value={formData.mobile} onChange={handleChange} />

        <InputLabel>Aadhar Card Image</InputLabel>
        <input type="file" name="aadhar" accept="image/*" onChange={handleFileChange} required />

        <Button type="submit" variant="contained" sx={{ backgroundColor: "#1976d2" }} disabled={loading}>
          {loading ? "Submitting..." : "Submit Request"}
        </Button>
      </Box>

      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={() => setSnackbar({ ...snackbar, open: false })}>
        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default RentAgreement;
