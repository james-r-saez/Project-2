const pgp = require('pg-promise')();

const cn = {
  host: 'localhost',
  port: 5432,
  database: 'words_list'
};

const db = pgp(cn);

module.exports = db;
