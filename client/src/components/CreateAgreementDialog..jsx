import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Snackbar,
  Alert,
} from "@mui/material";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const timeSlots = [
  "9am - 12pm",
  "12pm - 3pm",
  "3pm - 6pm",
  "6pm - 9pm",
];

const CreateAgreementDialog = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDay: "",
    preferredTime: "",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/send-details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSnackbarOpen(true);
        handleClose();
        setFormData({ name: "", email: "", phone: "", preferredDay: "", preferredTime: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Server error. Please try again later.");
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter Your Details</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Full Name"
            type="text"
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Phone Number"
            type="tel"
            fullWidth
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            select
            margin="dense"
            label="Preferred Day"
            fullWidth
            name="preferredDay"
            value={formData.preferredDay}
            onChange={handleChange}
          >
            {days.map((day) => (
              <MenuItem key={day} value={day}>
                {day}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            margin="dense"
            label="Preferred Time"
            fullWidth
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
          >
            {timeSlots.map((slot) => (
              <MenuItem key={slot} value={slot}>
                {slot}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            Done
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Thank you! We will contact you soon.
        </Alert>
      </Snackbar>
    </>
  );
};

export default CreateAgreementDialog;
