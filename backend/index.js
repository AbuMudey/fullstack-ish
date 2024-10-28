// Importera nödvändiga moduler
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const { Client } = require('pg');

// Initialisera Express-applikationen och ladda miljövariabler
const app = express();
dotenv.config();

// Konfigurera PostgreSQL-klienten
const client = new Client({
  connectionString: process.env.PGURI, // Hämtar anslutningssträngen från miljövariabeln
  ssl: {
    rejectUnauthorized: false, // Nödvändigt för Render och andra externa tjänster som kräver SSL
  }
});

// Anslut till PostgreSQL-databasen
client.connect()
  .then(() => {
    console.log('Ansluten till PostgreSQL-databasen');
  })
  .catch(error => {
    console.error('Misslyckades att ansluta till databasen:', error);
  });

// Middleware för att servera statiska filer från dist-mappen
app.use(express.static(path.join(__dirname, 'dist')));

// API-endpoint för att hämta alla filmer från databasen
app.get('/api', async (req, res) => {
  try {
    const { rows } = await client.query('SELECT director, movie, year, actors, genres FROM movies');
    res.json(rows); // Skickar tillbaka alla filmer som JSON
  } catch (error) {
    console.error('Fel vid hämtning från databasen:', error);
    res.status(500).json({ error: 'Något gick fel med databasförfrågan' });
  }
});

// Middleware för att hantera alla andra requests och dirigera till index.html (för frontend-routning)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Starta servern på den port som Render tillhandahåller, eller port 3000 lokalt
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servern är redo på http://localhost:${PORT}`);
});
