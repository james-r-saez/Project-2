DROP DATABASE IF EXISTS words_list;
CREATE DATABASE words_list;

\connect words_list;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR NOT NULL UNIQUE,
  password_digest VARCHAR NOT NULL,
);

DROP TABLE IF EXISTS words;

CREATE TABLE words (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  definition VARCHAR(255),
  is_done BOOLEAN
);
