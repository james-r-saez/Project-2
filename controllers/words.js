const router = require('express').Router();
const Words = require('../models/words.js');
const auth = require('../services/auth');

// router.get("/", Words.allWords, (req, res, next) => {
//   res.render("words", { wordsData: res.locals.wordsData  });
// });

router.post('/', auth.restrict, Words.create, (req, res, next) => {
	res.json({newWordId: res.locals.newWordId});
});

router.delete('/users/wordbank', auth.restrict, Words.destroy, (req, res, next) => {
    res.json({newWordId: req.params.newWordId});
});

router.get("/", auth.restrict, Words.allWords, (req, res, next) => {
    res.render("users/wordbank", { wordsData: res.locals.wordsData });
});

module.exports = router;
