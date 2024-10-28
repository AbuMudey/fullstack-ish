const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const { Client } = require('pg')

const app = express()
dotenv.config()

// Konfigurera och anslut till PostgreSQL-klienten
const client = new Client({
  connectionString: process.env.PGURI,
  ssl: {
    rejectUnauthorized: false 
  }
})

client.connect()
  .then(() => {
    console.log('Ansluten till PostgreSQL-databasen')
  })
  .catch(error => {
    console.error('Misslyckades att ansluta till databasen:', error)
  })

// Middleware för att servera statiska filer från dist-mappen
app.use(express.static(path.join(__dirname, 'dist')))

// API-endpoint som hämtar alla filmer
app.get('/api', async (req, res) => {
  try {
    const { rows } = await client.query('SELECT director, movie, year, actors, genres FROM movies')
    res.json(rows) // Skickar tillbaka alla filmer som JSON
  } catch (error) {
    console.error('Fel vid hämtning från databasen:', error)
    res.status(500).json({ error: 'Något gick fel med databasförfrågan' })
  }
})

// Starta servern och lyssna på rätt port
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servern är redo på http://localhost:${PORT}`)
})
