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
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <strong>{movie.movie}</strong> <span>({movie.year})</span>
              <span>Regissör: {movie.director}</span>
              <span className="actors">Skådespelare: {movie.actors.join(', ')}</span>
              <span className="genres">Genrer: {movie.genres.join(', ')}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
