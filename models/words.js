const db = require('../db/index.js');

//
const Words = {};

Words.allWords = (req, res, next) => {  //to display all words
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

Words.create = (req, res, next) => {
	const userId = req.user.id;
	db.one("INSERT INTO words (name, definition, userId) VALUES ( $1, $2, $3 ) RETURNING id;", [req.body.name, req.body.definition, userId])
	.then(result => {
		res.locals.newWordId = result.id;
		next();
	}).catch(err => {
		console.log('error encountered in pg-promise call at wordsModel.create. error:', err);
		next(err);
	});
};

// Words.update

Words.destroy = (req, res, next) => {
	db.none("DELETE FROM words WHERE id = $1", [req.params.id])
		.then(() => {
			next();
		})
		.catch(error => {
			console.log("error encountered in Words.Destroy. error:", error);
			next(error);
		});
};

module.exports = Words;
