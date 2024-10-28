const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const { Client } = require('pg');


const app = express();
dotenv.config();

// Konfigurera PostgreSQL-klienten
const client = new Client({
  connectionString: process.env.PGURI, 
  ssl: {
    rejectUnauthorized: false, // Nödvändigt för Render och andra externa tjänster som kräver SSL
  }
});


client.connect()
  .then(() => {

  })
  .catch(error => {
    console.error('Misslyckades att ansluta till databasen:', error);
  });

app.use(express.static(path.join(__dirname, 'dist')));


app.get('/api', async (req, res) => {
  try {
    const { rows } = await client.query('SELECT director, movie, year, actors, genres FROM movies');
    res.json(rows); 
  } catch (error) {
    res.status(500).json({ error: 'Något gick fel med databasförfrågan' });
  }
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servern är redo på http://localhost:${PORT}`);
});
