import React, { useState } from 'react';
import { 
  Button, 
  TextField, 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Grid 
} from "@mui/material";
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(4),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const BookEvent = () => {
  const [applicantName, setApplicantName] = useState('');
  const [numAdults, setNumAdults] = useState(0);
  const [numKids, setNumKids] = useState(0);
  const adultPrice = 25;
  const kidPrice = 15;

  const totalCost = numAdults * adultPrice + numKids * kidPrice;

  const handlePayment = () => {
    // Validate input fields
    if (!applicantName) {
      alert('Please enter your name');
      return;
    }
    if (numAdults < 0) {
      alert('Number of adults cannot be negative');
      return;
    }
    if (numKids < 0) {
      alert('Number of kids cannot be negative');
      return;
    }

    // Prepare the form data
    const formData = {
      applicantName,
      numAdults,
      numKids,
      totalCost,
    };

    // Send the form data
    fetch("postgresql://gmf_user:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX@dpg-cru1hspu0jms73c32iug-a.frankfurt-postgres.render.com/gmf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Form data submitted successfully");
          alert("Booking successful!");
        } else {
          console.error("Error submitting form data");
          alert("Error submitting form. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error submitting form data:", error);
        alert("Error submitting form. Please try again.");
      });
  };

  return (
    <Container maxWidth="sm">
      <StyledPaper elevation={3}>
        <Typography variant="h4" gutterBottom align="center">
          Event Booking
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Applicant Name"
                value={applicantName}
                onChange={(e) => setApplicantName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <StyledTextField
                fullWidth
                label="Number of Adults"
                type="number"
                value={numAdults}
                onChange={(e) => setNumAdults(parseInt(e.target.value, 10) || 0)}
              />
            </Grid>
            <Grid item xs={6}>
              <StyledTextField
                fullWidth
                label="Number of Kids (over 14)"
                type="number"
                value={numKids}
                onChange={(e) => setNumKids(parseInt(e.target.value, 10) || 0)}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Total Cost"
                value={`£ ${totalCost.toFixed(2)}`}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button 
                fullWidth
                variant="contained" 
                color="primary" 
                onClick={handlePayment}
                size="large"
              >
                Pay Now
              </Button>
            </Grid>
          </Grid>
        </Box>
      </StyledPaper>
    </Container>
  );
};

export default BookEvent;
