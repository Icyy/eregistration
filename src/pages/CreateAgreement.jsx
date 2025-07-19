import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  InputLabel,
} from "@mui/material";
import axios from "axios";

const CreateAgreement = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [aadhar, setAadhar] = useState(null);
  const [pan, setPan] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.name === "aadhar") setAadhar(e.target.files[0]);
    if (e.target.name === "pan") setPan(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("aadhar", aadhar);
    form.append("pan", pan);

    try {
      const res = await axios.post("http://localhost:5000/api/send-agreement", form);
      alert("Submitted Successfully");
    } catch (err) {
      console.error(err);
      alert("Error sending data");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Create Agreement</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField name="name" label="Full Name" required onChange={handleChange} />
        <TextField name="email" label="Email" type="email" required onChange={handleChange} />

        <InputLabel>Aadhar Card Image</InputLabel>
        <input type="file" name="aadhar" accept="image/*" onChange={handleFileChange} required />

        <InputLabel>PAN Card Image</InputLabel>
        <input type="file" name="pan" accept="image/*" onChange={handleFileChange} required />

        <Button type="submit" variant="contained" sx={{ backgroundColor: "#df8b26" }}>Submit</Button>
      </Box>
    </Container>
  );
};

export default CreateAgreement;
