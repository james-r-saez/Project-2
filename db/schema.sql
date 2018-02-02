DROP DATABASE IF EXISTS words_list;
CREATE DATABASE words_list;

\connect words_list


DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR NOT NULL UNIQUE,
  password_digest VARCHAR NOT NULL
);

DROP TABLE IF EXISTS words CASCADE;

CREATE TABLE words (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255),
  definition TEXT,
  userId INTEGER references users(id)
);
