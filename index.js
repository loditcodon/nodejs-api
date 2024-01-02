const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3006;

// Kết nối với MySQL
const connection = mysql.createConnection({
  host: '172.17.0.2',
  user: 'root',
  password: 'Hoang.123456',
  database: 'custom_profile',
  port: 31174,
});

connection.connect((err) => {
  if (err) {
    return;
  }
});

app.get('/api/data/maliciousUrl', (req, res) => {
  connection.query('SELECT * FROM MaliciousUrl', (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error executing MySQL query 500' });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ message: 'No data available' });
      return;
    }

    

    res.json(results);
  });
});

app.get('/api/data/phishingUrl', (req, res) => {
  connection.query('SELECT * FROM PhishingUrl', (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error executing MySQL query 500' });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ message: 'No data available' });
      return;
    }

    

    res.json(results);
  });
});

app.get('/api/data/pupUrl', (req, res) => {
  connection.query('SELECT * FROM PupUrl', (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error executing MySQL query 500' });
      return;
    }

    if (results.length === 0) {
      
      res.status(404).json({ message: 'No data available' });
      return;
    }
    res.json(results);
  });
});

app.get('/api/data/trackingUrl', (req, res) => {
  connection.query('SELECT * FROM TrackingUrl', (error, results) => {
    if (error) {
      
      res.status(500).json({ error: 'Error executing MySQL query 500' });
      return;
    }

    if (results.length === 0) {
      
      res.status(404).json({ message: 'No data available' });
      return;
    }

    

    res.json(results);
  });
});

app.get('/api/data/vnbadsiteUrl', (req, res) => {
  connection.query('SELECT * FROM VnbadsiteUrl', (error, results) => {
    if (error) {
      
      res.status(500).json({ error: 'Error executing MySQL query 500' });
      return;
    }

    if (results.length === 0) {
      
      res.status(404).json({ message: 'No data available' });
      return;
    }

    

    res.json(results);
  });
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
