const db = require("../db/index.js");

const Words = {};

Words.allWords = (req, res, next) => {
  db.manyOrNone('SELECT * FROM words')
    .then(data => {
      res.locals.wordsData = data;
      next();
    })
    .catch(err => {
      console.log('db error: ' + err);
      next(err);
    });
};

module.exports = Words;
