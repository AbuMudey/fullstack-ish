-- Database: Movies
CREATE DATABASE Movies;

-- Använd Movies-databasen
\c Movies;

-- Skapa tabellen movies
CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    director VARCHAR(100) NOT NULL,
    movie VARCHAR(100) NOT NULL,
    year INTEGER NOT NULL,
    actors TEXT[] NOT NULL,
    genres TEXT[] NOT NULL
);

-- Lägg till data i Movies

INSERT INTO movies (director, movie, year, actors, genres) VALUES
('Denis Villeneuve', 'Prisoners', 2013, ARRAY['Hugh Jackman', 'Jake Gyllenhaal', 'Viola Davis'], ARRAY['Crime', 'Mystery', 'Drama']),
('Denis Villeneuve', 'Sicario', 2015, ARRAY['Emily Blunt', 'Josh Brolin', 'Benicio Del Toro'], ARRAY['Crime', 'Action', 'Drama']),
('Ben Affleck', 'Gone Baby Gone', 2007, ARRAY['Morgan Freeman', 'Ed Harris', 'Casey Affleck'], ARRAY['Crime', 'Mystery', 'Drama']);

INSERT INTO movies (director, movie, year, actors, genres)
VALUES ('Ridley Scott', 'Gladiator', 2000, ARRAY['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen'], ARRAY['Action', 'Adventure', 'Drama']);
  


SELECT * FROM movies;
