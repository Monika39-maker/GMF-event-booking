import React from 'react';
import {
  Typography,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(4),
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.divider}`,
  '&:last-child': {
    borderRight: 'none',
  },
}));

const AdminView = () => {
  // Sample data for the table (3 empty rows)
  const guestData = [
    { id: 1, name: '', adults: '', under5: '', over5: '', totalCost: '', hasPaid: '' },
    { id: 2, name: '', adults: '', under5: '', over5: '', totalCost: '', hasPaid: '' },
    { id: 3, name: '', adults: '', under5: '', over5: '', totalCost: '', hasPaid: '' },
  ];

  return (
    <Container maxWidth="lg">
      <StyledPaper elevation={3}>
        <Typography variant="h4" gutterBottom>
          Welcome Laxmi
        </Typography>
        <Typography variant="h6" gutterBottom>
          Following is the list of guests for the upcoming event
        </Typography>
        <StyledTableContainer component={Paper}>
          <Table aria-label="guest list table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Guest Name</StyledTableCell>
                <StyledTableCell align="right">Number of adults</StyledTableCell>
                <StyledTableCell align="right">Number of kids under 5</StyledTableCell>
                <StyledTableCell align="right">Number of kids over 5</StyledTableCell>
                <StyledTableCell align="right">Total cost</StyledTableCell>
                <StyledTableCell align="center">Has Paid</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {guestData.map((row) => (
                <TableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.adults}</StyledTableCell>
                  <StyledTableCell align="right">{row.under5}</StyledTableCell>
                  <StyledTableCell align="right">{row.over5}</StyledTableCell>
                  <StyledTableCell align="right">{row.totalCost}</StyledTableCell>
                  <StyledTableCell align="center">{row.hasPaid}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
      </StyledPaper>
    </Container>
  );
};

export default AdminView;
