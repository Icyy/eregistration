// src/components/AgreementDialog.jsx
import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button, InputLabel, MenuItem, Select, FormControl, Snackbar
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AgreementDialog = ({ open, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    day: '',
    timeRange: ''
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // Add backend email sending logic later
    console.log('User submitted form:', form);

    // Clear form
    setForm({ name: '', phone: '', email: '', day: '', timeRange: '' });
    setSnackbarOpen(true);
    onClose();
  };

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Create Rent Agreement</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth margin="dense" name="name" label="Name" value={form.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth margin="dense" name="phone" label="Phone Number" value={form.phone}
            onChange={handleChange}
          />
          <TextField
            fullWidth margin="dense" name="email" label="Email" value={form.email}
            onChange={handleChange}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Preferred Day</InputLabel>
            <Select
              name="day" value={form.day}
              onChange={handleChange}
              label="Preferred Day"
            >
              {days.map(day => (
                <MenuItem key={day} value={day}>{day}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth margin="dense" name="timeRange" label="Time Range (e.g. 10 AM - 2 PM)"
            value={form.timeRange}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">Submit</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen} autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success">Thank you! We will contact you soon.</Alert>
      </Snackbar>
    </>
  );
};

export default AgreementDialog;
