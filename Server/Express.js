// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const MongoClient = require('mongodb').MongoClient;
const ejs = require('ejs');

// Express app setup
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// PostgreSQL database configuration
const pgConfig = {
  user: 'Raymond_Payne',
  host: 'localhost',
  database: 'Construction_Business',
  password: 'JuliaHoggi31956',
  port: 5432,
};
const pgPool = new Pool(pgConfig);

// MongoDB database configuration
const mongoUrl = 'mongodb://localhost:27017';
const mongoDbName = 'your_mongodb_database';

// Route to handle search requests
app.get('/search', async (req, res) => {
  // Extract query parameters
  const { query, database } = req.query;

  try {
    // Initialize results array
    let results;

    // Search in PostgreSQL if specified
    if (database === 'postgres' || database === 'both') {
      const pgQuery = 'SELECT * FROM your_table WHERE your_text_field LIKE $1';
      const pgResult = await pgPool.query(pgQuery, [`%${query}%`]);
      results = pgResult.rows;
    }

    // Search in MongoDB if specified
    if (database === 'mongodb' || database === 'both') {
      const client = await MongoClient.connect(mongoUrl, { useUnifiedTopology: true });
      const db = client.db(mongoDbName);
      const mongoQuery = { your_text_field: { $regex: new RegExp(query, 'i') } };
      const mongoResult = await db.collection('your_collection').find(mongoQuery).toArray();
      results = results ? results.concat(mongoResult) : mongoResult;
      client.close();
    }

    // Render search results using EJS template
    res.render('search-results.ejs', { results });
  } catch (error) {
    // Handle errors
    console.error('Error during search:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});