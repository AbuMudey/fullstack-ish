-- Database: postgres
CREATE TABLE cities (
  id serial PRIMARY KEY,
  name text UNIQUE NOT NULL,
  population INTEGER NOT NULL
);
-- DROP DATABASE IF EXISTS postgres;

