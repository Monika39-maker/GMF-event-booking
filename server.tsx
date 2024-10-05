//An express server that takes data from bookEvent
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");



const port = 5002;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
const { Pool } = require("pg");

const pool = new Pool({
  user: "gmf_user",
  host: "dpg-cru1hspu0jms73c32iug-a",
  database: "gmf", // Replace with your database name
  password: "lz8Mr3XSN2ctjwrhEoIGsfqrywzSZa1K", // Replace with your password if you have one
  port: 5432,
});


app.post('/', (req, res) => {
    
    const {
        applicantName,
        numAdults,
        numKids,
        totalCost
    } = req.body;

    
    if (!applicantName || !numAdults || !numKids || !totalCost) {
      return res.status(400).send("Please provide all information required.");
    }

    const query =
      "INSERT INTO booking (fullname, numAdults, numKids, totalCost) VALUES ($1, $2, $3, $4)";

    pool
      .query(query, [applicantName, numAdults, numKids, totalCost])
      .then(() => res.send("applicant details added!"))
      .catch((error) => {
        console.error(error);
        res.status(500).json(error);
      });
});

app.get('/', (req, res) => {
  const query = "SELECT * FROM my_schema.booking";

  pool
    .query(query)
    .then((result) => 
      console.log(result)
      // res.send(result)
    )
    .catch((error) => {
      console.error(error);
      res.status(500).json(error);
    });
    console.log("Data fetched successfully");
});


// show the data in port 3001 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



