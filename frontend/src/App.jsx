import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('/api') // Hämta från /api endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error('Nätverksrespons var inte okej')
        }
        return response.json()
      })
      .then((data) => setMovies(data)) // Spara filmerna i state
      .catch((error) => console.error('Error fetching movies:', error))
  }, [])

  return (
    <>
      <h1>Filmer</h1>
      <div className="card">
        <h2>Lista över filmer</h2>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <strong>{movie.movie}</strong> ({movie.year})<br />
              Regissör: {movie.director}<br />
              Skådespelare: {movie.actors.join(', ')}<br />
              Genrer: {movie.genres.join(', ')}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
