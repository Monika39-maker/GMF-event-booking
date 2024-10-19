import React, { useState } from 'react';
import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  Paper,
  Alert,
} from "@mui/material";
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(8),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    try {
      // Here you would typically make an API call to verify credentials
      // For this example, we'll use a mock authentication
      const response = await mockAuthenticateUser(username, password);
      
      if (response.success) {
        // Handle successful login (e.g., store token, redirect)
        console.log('Login successful');
        // Redirect to admin dashboard or set authentication state
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Login error:', err);
    }
  };

  // Mock authentication function (replace with actual API call)
  const mockAuthenticateUser = async (username, password) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock validation (replace with actual validation logic)
    if (username === 'admin' && password === 'password') {
      return { success: true };
    }
    return { success: false };
  };

  return (
    <Container maxWidth="xs">
      <StyledPaper elevation={3}>
        <Typography variant="h4" align="center" gutterBottom>
          Admin Login
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate>
          <StyledTextField
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <StyledTextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
          >
            Login
          </Button>
        </Box>
      </StyledPaper>
    </Container>
  );
};

export default AdminLogin;
