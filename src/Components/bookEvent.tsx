import React, { useState, ChangeEvent } from 'react';

import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";


interface FormData {
  applicantName: string;
  numAdults: number;
  numKids: number;
  totalCost: number;
}

const BookEvent = () => {
  
  const [applicantName, setApplicantName] = useState<String>('');
  const [numAdults, setNumAdults] = useState<number>(0);
  const [numKids, setNumKids] = useState<number>(0);
  const adultPrice = 25;
  const kidPrice = 15;

  const totalCost:number = numAdults * adultPrice + numKids * kidPrice;

  const handlePayment = () => {
    
      // Validate input fields
      const errors: { [key:string]: string}  = {}
      if (!applicantName) {
        errors.applicantName = 'Please enter your name';
      }
      if (numAdults < 0) {
        errors.numAdults = 'Number of adults cannot be negative';
      }
      if (numKids < 0) {
        errors.numKids = 'Number of kids cannot be negative';
      }
    
      
        // Prepare the form data
        const formData = {
          applicantName,
          numAdults,
          numKids,
          totalCost,
        };
        
        // Send the form data to localhost:3001
        fetch("postgresql://gmf_user:lz8Mr3XSN2ctjwrhEoIGsfqrywzSZa1K@dpg-cru1hspu0jms73c32iug-a.frankfurt-postgres.render.com/gmf", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((response) => {
            if (response.ok) {
              console.log("Form data submitted successfully");
              console.log(formData)
              console.log("Form submitted successfully")
            } else {
              console.error("Error submitting form data");
              console.log(response)
              // You can handle the error here, such as displaying an error message
            }
          })
          .catch((error) => {
            console.error("Error submitting form data:", error);
            // You can handle the error here, such as displaying an error message
          });
      
    };
    
  const handleApplicantNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setApplicantName(e.target.value);
  };

  const handleNumAdultsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumAdults(parseInt(e.target.value, 10) || 0);
  };

  const handleNumKidsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumKids(parseInt(e.target.value, 10) || 0);
  };

  return (
    <form noValidate autoComplete="off">
      <TextField
        label="Applicant Name"
        value={applicantName}
        onChange={handleApplicantNameChange}
      />
      <TextField
        label="Number of Adults"
        type="number"
        value={numAdults}
        onChange={handleNumAdultsChange}
      />
      <TextField
        label="Number of Kids (over 14)"
        type="number"
        value={numKids}
        onChange={handleNumKidsChange}
      />
      <TextField
        label="Total Cost"
        value={`£${totalCost.toFixed(2)}`}
      />
      <Button variant="contained" color="primary" onClick={handlePayment}>
        Pay Now
      </Button>
    </form>
  );
};

export default BookEvent;









